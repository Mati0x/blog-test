import AllPosts from '../../components/posts/AllPosts'
import { getAllPosts } from '../../data/post-utils'

const AllPostPage = ({ posts }) => {
  return <AllPosts posts={posts} />
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}

export default AllPostPage
