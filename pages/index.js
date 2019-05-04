// This is the Link API
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);


const Index = () => ( 
  <ul>
    <PostLink title="Hello Next.js" />
    <PostLink title="Learn Next.js is awesome" />
    <PostLink title="Deploy apps with Zeit" />
  </ul>
)

export default Index