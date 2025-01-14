import { RefreshRouteOnSave } from '@/components/refresh-route-on-save'
import { getPayload } from 'payload'
import config from '@payload-config'
import { draftMode } from 'next/headers'

type PostPageProps = {
  params: Promise<{ slug: string | null }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params

  if (!slug || slug === 'null') {
    return <p>No post found</p>
  }

  const payload = await getPayload({ config })

  const { isEnabled: draft } = await draftMode()

  const res = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  console.log(res)

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
      <h1>{post.title}</h1>
      <h2>{post.updatedAt}</h2>
      <div>{JSON.stringify(post.body)}</div>
    </>
  )
}
