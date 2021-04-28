import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Container } from 'reactstrap';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.imgHome}>
          <Image
            src="/Home.png"
            alt="Home"
            width={780}
            height={400}
          />
        </div>

      </Container>
    </div >
  )
}
