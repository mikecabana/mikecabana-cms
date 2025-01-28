import CardAnimated from '@/components/card-animated'
import { Guestbook } from '@/components/guestbook'
import { Hero } from '@/components/hero'
import { getPayload } from '@/lib/payload'
import { formatDateTime } from '@/lib/utils'
import { cookies as nextCookies } from 'next/headers'

export default async function HomePage() {
  const payload = await getPayload()

  const cookies = await nextCookies()
  const guestbookSigned = cookies.get('guestbook')

  const posts = await payload.find({
    collection: 'posts',
    limit: 4,
    sort: '-createdAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })
  return (
    <>
      <Hero />
      <main>
        <div className="grid grid-cols-2 gap-4 mb-12">
          {posts.docs.map((post, i) => (
            <a href={`/posts/${post.slug}`} key={i}>
              <CardAnimated gradientIndex={i}>
                <h2 className="text-lg group-hover:underline">{post.title}</h2>
                <p className="text-xs opacity-50">{formatDateTime(post.createdAt)}</p>
              </CardAnimated>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <Guestbook signed={!!guestbookSigned} />
        </div>
      </main>
    </>
  )
}
