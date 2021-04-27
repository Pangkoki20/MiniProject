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
                            <Image
                                src="/Distancing.png"
                                alt="Distancing"
                                width={300}
                                height={270}
                            />
                            <div className={styles.textDistancing}>
                                <Alert color="info" >
                                    <b>การเว้นระยะห่างทางสังคม</b>
                                </Alert>
                            </div>
                        </Col>
                        <Col xs="6" sm="4" className={styles.imgMask}>
                            <Image
                                src="/Mask.png"
                                alt="Mask"
                                width={300}
                                height={270}
                            />
                            <div className={styles.textDistancing}>
                                <Alert color="info" >
                                    <b>การสวมใส่หน้ากากอนามัย</b>
                                </Alert>
                            </div>
                        </Col>
                        <Col xs="6" sm="4" className={styles.imgHand}>
                            <Image
                                src="/Hand.png"
                                alt="Hand"
                                width={300}
                                height={270}
                            />
                            <div className={styles.textDistancing}>
                                <Alert color="info" >
                                    <b>การล้างมือทำความสะอาด</b>
                                </Alert>
                            </div>
                        </Col>

                    </Row>

                </div>
            </Container>
        </div >
    )
}
