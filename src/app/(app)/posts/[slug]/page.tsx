import { RefreshRouteOnSave } from '@/components/refresh-route-on-save'
import RichText from '@/components/rich-text'
import { getPayload } from '@/lib/payload'
import { formatDateTime } from '@/lib/utils'

type PostPageProps = {
  params: Promise<{ slug: string | null }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params

  if (!slug || slug === 'null') {
    return <p>No post found</p>
  }

  const payload = await getPayload()

  const res = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (!res) {
    return <p>No post found</p>
  }

  const post = res.docs[0]

  if (!post) {
    return 'Not found'
  }

  return (
    <>
      <RefreshRouteOnSave />
      <div className="mb-8">
        <h1 className="text-2xl">{post.title}</h1>
        <p className="text-sm opacity-75">{formatDateTime(post.createdAt)}</p>
      </div>
      <RichText data={post.content} />
      {/* <pre>{JSON.stringify(post.content, null, 2)}</pre> */}
    </>
  )
}
