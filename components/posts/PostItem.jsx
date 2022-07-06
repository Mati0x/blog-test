import Link from 'next/link'
import Image from 'next/image'
import styles from './PostItem.module.css'

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post

  const imagePath = `/images/${slug}/${image}`

  const linkPath = `/posts/${slug}`
  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={title}
              width="300"
              height="300"
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{date}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem
