import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Col, Row, Container, Alert, Input, Label } from 'reactstrap';


export default function SelfDefense() {
    return (
        <div>
            <Navbar />
            <Container>
                <div className={styles.textSelfDefense}>วิธีการป้องกันตนเอง</div>
                <div className={styles.formImgSelfDefense}>
                    <Row>
                        <Col xs="6" sm="4" className={styles.imgDistancing}>

                            <div className={styles.textDistancing}>
                                <Alert color="info" >
                                    {/* <b>การเว้นระยะห่างทางสังคม</b> */}
                                </Alert>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div >
    )
}
