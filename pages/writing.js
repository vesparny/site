import Link from 'next/link'
import posts from '../posts'

export default () => (
  <ul>
    {posts.map(post => (
      <li>
        <Link href={`/blog?id=${post.permalink}`} as={post.permalink}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
)
