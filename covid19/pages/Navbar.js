import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => (
    <div className={styles.center}>
        <h1 className={styles.header}>การป้องกันตนเอง ห่างไกล Covid 19</h1>
        <Link href="/" className={styles.btHome}><a> หน้าแรก </a></Link>
        <Link href="/login" className={styles.btloginNav}><a> เข้าสู่ระบบ </a></Link>

    </div>
)

export default Navbar