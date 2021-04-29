
import useSWR, { mutate } from 'swr'
import { useState, useEffect } from "react"
import axios from "axios"
import styles from '../styles/Home.module.css'
import { Col, Container, Alert } from 'reactstrap';

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
                {dataList.map((val, key) => {
                    return (
                        <div className={styles.cardSelfDefense}>
                            <Col sm="12" md={{ size: 6, offset: 3 }} >
                                <Alert color="primary">
                                    <p className="card-text">{val.title}</p>
                                </Alert>
                            </Col>
                        </div>

                    );
                })}
            </Container>
        </div>
    )
}
