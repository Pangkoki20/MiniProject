import Head from 'next/head'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    การป้องกันตนเอง ห่างไกล Covid 19</a>
                <div className="p-s">
                    <Link href="/">
                        <button className="btn btn-outline-light me-3">Home</button>
                    </Link>
                    <Link href="/login">
                        <button className="btn btn-outline-light me-3" >Login</button>
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar