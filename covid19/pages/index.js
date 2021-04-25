import Head from 'next/image'
import styles from '../styles/Home.module.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, image } from 'reactstrap';


export default function Home() {
  return (
    <div>
      <Container>
        <Form>
          <image
            src="Vaccine.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </Form>
      </Container>
    </div>
  )
}
