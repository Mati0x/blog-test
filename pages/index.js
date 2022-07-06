import Hero from '../components/Hero'
import FeaturedPosts from '../components/FeaturedPosts'
import { getFeaturedPosts } from '../data/post-utils'

// const DUMMY_POSTS = [
//   {
//     slug: 'getting-started',
//     title: 'NextJS',
//     image: 'getting-started with NextJS.png',
//     excerpt: 'The React Framawork for Production',
//     date: '2002-02-10',
//   },
//   {
//     slug: 'getting-started',
//     title: 'NextJS 2',
//     image: 'getting-started with NextJS.png',
//     excerpt: 'The React Framawork for Production 2',
//     date: '2002-02-10',
//   },
//   {
//     slug: 'getting-started',
//     title: 'NextJS 3',
//     image: 'getting-started with NextJS.png',
//     excerpt: 'The React Framawork for Production 3',
//     date: '2002-02-10',
//   },
// ]

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage
