import Link from 'next/link'
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
        </div >
    )
}
