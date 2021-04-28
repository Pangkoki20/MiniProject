import Link from 'next/link'
import Image from 'next/image'
import useSWR, { mutate } from 'swr'
import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Col, Row, Container, Alert, Input, Label } from 'reactstrap';

const URL = `http://localhost:4001/api/datas`
const fetcher = URL => axios.get(URL).then(res => res.data)

export default function BSelfDefenseook() {

    const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false })

    const [title, setTitle] = useState("");
    const [dataList, setDatalist] = useState([]);

    const getData = async () => {
        const result = await axios.get(`${URL}`)
        setDatalist(result.data.Array)
    }

    useEffect(() => {
        getData()
    }, [])

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            <Container>
                <div className={styles.textSelfDefense}>วิธีการป้องกันตนเอง</div>
                <div className={styles.formImgSelfDefense}>
                    <Row>
                        <Col xs="6" sm="4" className={styles.imgDistancing}>

                            <div className={styles.textDistancing}>
                                {dataList.map((val, key) => {
                                    return (
                                        <div className={styles.card}>
                                            <div className="card-body">
                                                <p className="card-text">{val.title}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    )
}
