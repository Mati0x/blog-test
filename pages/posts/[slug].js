import PostContent from '../../components/posts/post-detail/PostContent'
import { getPostData, getPostsFiles } from '../../data/post-utils'

const SinglePost = ({ post }) => {
  return <PostContent post={post} />
}

export function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData,
    },
    revalidate: 600, //10minutes
  }
}

export function getStaticPath() {
  const postFileNames = getPostsFiles()

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default SinglePost
