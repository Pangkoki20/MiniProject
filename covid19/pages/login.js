import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';


export default function login() {
    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup align="center">
                                <div>
                                    <h2 className={styles.textHead}>เข้าสู่ระบบ</h2>
                                </div>
                                <div>
                                    <Input className={styles.ip1} type="text" name="username" placeholder="Username" />
                                </div>
                                <div>
                                    <Input className={styles.ip1} type="password" name="password" placeholder="Password" />
                                </div>
                                <Button className={styles.btlogin} style={{ width: "100%", marginTop: "50px" }}
                                ><b>เข้าสู่ระบบ</b></Button>
                                <div className={styles.textRememberMe}>
                                    <input type="checkbox"
                                        name="RememberMe"
                                        onChange={(e) => setRememberme(e.target.value)}
                                    />Remember me</div>

                                <div className={styles.textOr}>or</div>
                                <div className={styles.textLogSo}> Login with your social media account</div>
                                <p className="message"></p>
                                <Button className={styles.btloginpsu} onClick={() => {
                                    sendData()
                                }} style={{ width: "100%", marginTop: "50px" }}>Login With Facebook</Button>
                                <br></br>

                            </FormGroup>

                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}