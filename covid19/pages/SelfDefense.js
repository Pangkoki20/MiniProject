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

                <div className={styles.navMessage}>
                    <Link href="/"><a> หน้าแรก </a></Link> |
                    <Link href="/Messge"><a> ข่าวสาร </a></Link> |
                    <Link href="/SelfDefense"><a> การป้องกันตนเอง </a></Link>  |
                    <Link href="/Contact"><a> ติดต่อเรา </a></Link>
                </div>
            </Container>
            <div>
                <Row>
                    <Col xs="6" sm="4">
                        <Image
                            className={styles.imgHome}
                            src="/Distancing.png"
                            alt="Home"
                            width={350}
                            height={340}
                        />
                    </Col>
                    <Col xs="6" sm="4">
                        <Image
                            className={styles.imgHome}
                            src="/Mask.png"
                            alt="Home"
                            width={350}
                            height={340}
                        />
                    </Col>
                    <Col xs="6" sm="4">
                        <Image
                            className={styles.imgHome}
                            src="/Hand.png"
                            alt="Home"
                            width={350}
                            height={340}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Image
                            className={styles.imgHome}
                            src="/Testing.png"
                            alt="Home"
                            width={350}
                            height={340}
                        />
                    </Col>
                    <Col >
                        <Image
                            className={styles.imgHome}
                            src="/Thai Chana.png"
                            alt="Home"
                            width={350}
                            height={340}
                        />
                    </Col>
                </Row>
            </div>
        </div >
    )
}
