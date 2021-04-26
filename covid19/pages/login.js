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
                                <div className={styles.textRememberMe}>
                                    <input type="checkbox"
                                        name="RememberMe"
                                    // onChange={(e) => setRememberme(e.target.value)}
                                    /> Remember me</div>
                                <Button className={styles.btlogin} style={{ width: "100%", marginTop: "50px" }}
                                ><b>เข้าสู่ระบบ</b></Button>
                                <br></br>
                                <Button className={styles.btloginAdmin} style={{ width: "100%", marginTop: "50px" }}
                                ><b>สำหรับ Admin</b></Button>
                                <br></br>
                                <Button className={styles.btRegister} href="/register" style={{ width: "100%", marginTop: "50px" }}><b>ลงทะเบียน</b></Button>
                                <br></br>

                            </FormGroup>

                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}
