import styles from '../components/Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/" alt="Mat face" width="300" height="300" />
      </div>
      <h1>Hi, I'm Matix</h1>
      <p>This is a web dev blog - especially Front-end and Frameworks</p>
    </section>
  )
}

export default Hero
