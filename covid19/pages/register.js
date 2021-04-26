import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';


function Register() {
    return (

        <div>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup align="center">
                                <div>
                                    <h2 className={styles.textHeadRegister}>ลงทะเบียน</h2>
                                </div>
                                <div>
                                    <Input className={styles.ip1} type="text" name="username" placeholder="Name - Surname" />
                                </div>
                                <div>
                                    <Input className={styles.ip1} type="password" name="password" placeholder="Password" />
                                </div>
                                <div>
                                    <Input className={styles.ip1} type="text" name="email" placeholder="E-mail" />
                                </div>
                                <div>
                                    <Input className={styles.ip1} type="password" name="password" placeholder="Password" />
                                </div>
                                <div>
                                    <Input className={styles.ip1} type="password" name="password" placeholder="Password" />
                                </div>
                                <Button className={styles.btRegister2} style={{ width: "100%", marginTop: "50px" }}
                                > สมัครสมาชิก</Button>
                                <p className="message"></p>

                                <div className={styles.textOr}>or</div>
                                <div className={styles.textLogSo}> Login with your social media account</div>
                                <p className="message"></p>
                                <Button className={styles.btloginpsu} onClick={() => {
                                    sendData()
                                }} style={{ width: "100%", marginTop: "50px" }}>Login With Facebook</Button>

                            </FormGroup>

                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}
export default Register;