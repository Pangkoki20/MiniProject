import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, Nav, NavItem, NavLink } from 'reactstrap';


export default function Contact() {
    return (
        <div>
            <Navbar />
            <Container>
                <div className={styles.textContact}>ติดต่อเรา</div>
                <div className={styles.imgContact}>
                    <Image
                        src="/Contact.png"
                        alt="Contact"
                        width={980}
                        height={400}
                    />
                </div>

            </Container>
        </div >
    )
}
