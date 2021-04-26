import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../pages/Navbar'
import styles from '../styles/Home.module.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, Nav, NavItem, NavLink } from 'reactstrap';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.navMessage}>
          <Link href="/"><a> หน้าแรก </a></Link> |
          <Link href="/showStudents"><a> ข่าวสาร </a></Link> |
          <Link href="/register"><a> การป้องกันตนเอง </a></Link>  |
          <Link href="/login"><a> ติดต่อเรา </a></Link>
        </div>

        <div>
          <Image
            src="/Vaccine.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </Container>
    </div >
  )
}
