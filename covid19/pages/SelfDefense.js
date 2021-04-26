import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, Nav, NavItem, NavLink } from 'reactstrap';


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
                        </Col>
                        <Col xs="6" sm="4" className={styles.imgMask}>
                            <Image
                                src="/Mask.png"
                                alt="Mask"
                                width={300}
                                height={270}
                            />
                        </Col>
                        <Col xs="6" sm="4" className={styles.imgHand}>
                            <Image
                                src="/Hand.png"
                                alt="Hand"
                                width={300}
                                height={270}
                            />
                        </Col>
                    </Row>
                    {/* <Row>
                    <Col xs="6" sm="4">
                        <Image
                            src="/Testing.png"
                            alt="Testing"
                            width={300}
                            height={270}
                            right={200}
                        />
                    </Col>
                    <Col xs="6" sm="4">
                        <Image
                            src="/Thai Chana.png"
                            alt="ThaiChana"
                            width={300}
                            height={270}

                        />
                    </Col>
                </Row> */}

                </div>
            </Container>
        </div >
    )
}
