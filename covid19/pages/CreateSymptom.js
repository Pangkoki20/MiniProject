import Head from 'next/head'
import { useState, useEffect } from "react"
import axios from "axios"
import styles from '../styles/Home.module.css'
import { Col, Row, Container, Label, Button, Input } from 'reactstrap';

const URL = `http://localhost:4001/api/datas`

export default function CreateSymptom() {

    const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [dataList, setDatalist] = useState([]);

    const getDatas = async () => {
        const result = await axios.get(`${URL}`)
        setDatalist(result.data.Array)
    }

    const getData = async (id) => {
        const result = await axios.get(`${URL}/${id}`)
        setData(result.data)
    }

    const addData = async () => {
        const result = await axios.post(`${URL}`, {
            title: title,
        })
        getDatas()
    }

    const deleteData = async (id) => {
        const result = await axios.delete(`${URL}/${id}`)
        getDatas()
    }

    const updateBook = async (id) => {
        const result = await axios.put(`${URL}/${id}`, {
            title: newTitle,
        })
        getDatas()
    }

    useEffect(() => {
        getDatas(),
            getData()
    }, [])

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div className={styles.textCreateSymptom}>
                        <Label for="exampleAddress">การป้องกันตนเอง</Label>
                        <Input type="text" name="addData" placeholder="ป้อนการป้องกันตนเอง ...."
                            onChange={(e) => (setTitle(e.target.value))} />

                        <div className={styles.btData}>
                            <Button className={styles.btTextData} color="success"
                                onClick={addData}>เพิ่มข้อมูล</Button>
                        </div>
                    </div>
                    <div>
                        {dataList.map((val, key) => {
                            return (
                                <div className={styles.formData}>
                                    <p className="card-text">{val.title}</p>
                                    <input type="text"
                                        name="selfdefense"
                                        placeholder="Enter New Title"
                                        onChange={(e) => setNewTitle(e.target.value)}
                                    />
                                    <br />
                                    <Button className={styles.btTextData} color="primary" size="sm"
                                        onClick={() => updateBook(val.id)}>แก้ไขข้อมูล</Button>
                                    <Button className={styles.btTextData} color="danger" size="sm"
                                        onClick={() => deleteData(val.id)}>ลบข้อมูล</Button>
                                </div>

                            )
                        })
                        }


                    </div>


                </Col>
            </Row>
        </Container>
    )
}













