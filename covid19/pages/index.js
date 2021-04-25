import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, Nav, NavItem, NavLink } from 'reactstrap';


export default function Home() {
  return (
    <div>
      <Container>
        <div>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/hello-world">
              <a>Blog Post</a>
            </Link>
          </li>
        </div>
        <div>
          <Image
            src="/Image/Vaccine.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </Container>
    </div >
  )
}
