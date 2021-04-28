import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import { Col, Row, Button, Form, FormGroup, Input, Container } from 'reactstrap';

const URL = `http://localhost:4001/api/`

export default function login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rememberme, setRememberme] = useState('')

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${URL}/login`,
                { username, password, rememberme },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 4001) + "...")
        }
    }
    const loginForm = () => (
        <div className={styles.gridContainer}>
            <Row>
                <Col>
                    <FormGroup align="center">
                        <div>
                            <h2 className={styles.textHead}>เข้าสู่ระบบ</h2>
                        </div>
                        <div>
                            <Input className={styles.ip1} type="text" name="username" placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <Input className={styles.ip1} type="password" name="password" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </FormGroup>

                </Col>
            </Row>
        </div>
    )
    const copyText = () => {
        navigator.clipboard.writeText(token)
    }


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <FormGroup align="center">
                            <Form>
                                {loginForm()}
                                <div className={styles.textRememberMe}>
                                    <input type="checkbox" name="RememberMe"
                                        onChange={(e) => setRememberme(e.target.value)} /> Remember me</div>
                                <Button className={styles.btlogin} style={{ width: "100%", marginTop: "50px" }}
                                ><b>เข้าสู่ระบบ</b></Button>
                                <br></br>
                                <Button className={styles.btloginAdmin} style={{ width: "100%", marginTop: "50px" }}
                                ><b>สำหรับ Admin</b></Button>
                                <br></br>
                                <Button className={styles.btRegister} href="/register"
                                    style={{ width: "100%", marginTop: "50px" }}><b>ลงทะเบียน</b></Button>
                            </Form>
                        </FormGroup>

                    </Col>
                </Row>

            </Container>
        </div>
    )
}


