import { getPayload } from '@/lib/payload'

function PostsHeading() {
  return <h1 className="text-2xl mb-8">Posts</h1>
}

export default async function Posts() {
  const payload = await getPayload()

  const posts = await payload.find({
    collection: 'posts',
    limit: 10,
    sort: '-createdAt',
    draft: false,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  if (posts && posts.docs.length) {
    return (
      <>
        <PostsHeading />
        <ul>
          {posts.docs.map((post, i) => (
            <a href={`/posts/${post.slug}`} key={i}>
              <li className="group mb-8 py-4 px-4 rounded-md hover:bg-accent">
                <h2 className="text-lg group-hover:underline">{post.title}</h2>
                <p className="text-xs opacity-50">{post.createdAt}</p>
              </li>
            </a>
          ))}
        </ul>
      </>
    )
  }
  return (
    <>
      <PostsHeading />
      Theres nothing here...yet
    </>
  )
}
