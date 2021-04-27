import { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const URL = `http://localhost:4001/api/`

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
        }
        catch (e) {
            console.log(e)
        }

    }


    const registerForm = () => (
        <div className={styles.gridContainer}>
            <div>
                <Input className={styles.ip1} type="text"
                    name="username" placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <Input className={styles.ip1} type="text" name="email" placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <Input className={styles.ip1} type="password" name="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>

        </div>
    )
    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup align="center">
                                <div>
                                    <div className={styles.textHeadRegister}>ลงทะเบียน</div>
                                </div>

                                <div>{registerForm()}</div>
                                <Button className={styles.btRegister2}
                                    style={{ width: "100%", marginTop: "50px" }}
                                    onClick={register}> สมัครสมาชิก</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}