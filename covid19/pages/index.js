import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';


export default function Home() {
  return (

    <div>
      <Container>
        <Form>
          <Row>
            <Col>
              <FormGroup align="center">
                <div>
                  <h2 className={styles.textHead}>Login PSU Passport</h2>
                </div>
                <div>
                  <Input className={styles.ip1} type="text" name="username" placeholder="Username" />
                </div>
                <div>
                  <Input className={styles.ip1} type="password" name="password" placeholder="Password" />
                </div>
                <p className="message"></p>
                <Button className={styles.btloginpsu} style={{ width: "100%", marginTop: "50px" }}>LOGIN WITH PSU PASSPORT</Button>
                <br></br>
                <Button className={styles.btloginadmin} style={{ width: "100%", marginTop: "50px" }}
                >LOGIN (ADMIN)</Button>
              </FormGroup>

            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}
