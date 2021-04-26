import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Button } from 'reactstrap';


const Navbar = () => {
    return (
        <div className={styles.navHome}>
            <nav className="navbar fixed-top navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        การป้องกันตนเอง ห่างไกล Covid 19</a>
                    <div className="p-s">
                        <Button href="/login" color="primary" size="sm">หน้าแรก</Button>
                        <Button href="/login" color="primary" size="sm">ติดต่อเรา</Button>
                        <Button href="/login" color="primary" size="sm">เข้าสู่ระบบ</Button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar