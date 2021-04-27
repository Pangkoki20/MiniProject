import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Col, Row, Container, FormGroup, CustomInput, Label, Button, Input } from 'reactstrap';
import { useState } from 'react'

// export default function CreateSymptom() {
//     return (
//         <div>
//             <Navbar />
//             <Container>
//                 <div className={styles.textCreateSymptom}>เพิ่มข้อมูลการป้องกันตนเอง</div>
//                 <div className={styles.formImgCreateSymptom}>
//                     <Row>
//                         <Col sm="12" md={{ size: 6, offset: 3 }}>
//                             <FormGroup className={styles.textChoosePic}>
//                                 <Label for="exampleCustomFileBrowser">เพิ่มรูปภาพ</Label>
//                                 <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
//                             </FormGroup>
//                             {/* <Button color="primary" size="sm">Upload</Button>
//                             <Button color="danger" size="sm">Delete</Button> */}
//                         </Col>
//                         <Col sm="12" md={{ size: 6, offset: 3 }}>
//                             <div className={styles.textData}>
//                                 <Label for="exampleAddress">การป้องกันตนเอง</Label>
//                                 <Input type="text" name="dataSymptom" id="dataSymptom" placeholder="" />
//                             </div>
//                         </Col>
//                         <Col sm="12" md={{ size: 6, offset: 3 }} className={styles.btData} >
//                             <Button color="success" >เพิ่มข้อมูล</Button>
//                         </Col>
//                         <br></br>
//                     </Row>
//                     <div className={styles.formData}>
//                         <div className={styles.cardData}>
//                             <Button className={styles.btTextData} color="primary" size="sm" >แก้ไขข้อมูล</Button>
//                             <Button className={styles.btTextData} color="danger" size="sm">ลบข้อมูล</Button>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </div >
//     )
// }
const CreateSymptom = () => {

    let [datas, setDatas] = useState([
        { id: 1, selfdefense: 'การเว้นระยะห่างทางสังคม' },
        { id: 2, selfdefense: 'การสวมใส่หน้ากากอนามัย' },
        { id: 3, selfdefense: 'การล้างมือทำความสะอาด' }
    ])
    const [selfdefense, setSelfdefense] = useState('')
    const [idEdit, setIdEdit] = useState(0)

    const renderDatas = () => {
        if (datas !== null)
            return datas.map((data, index) => (
                <div key={index} className={styles.formData}>
                    {(idEdit !== data.id) ?
                        data.selfdefense :
                        (<input type="text"
                            name="selfdefense"
                            value={selfdefense}
                            onChange={(e) => setSelfdefense(e.target.value)}
                        />)
                    }
                    <div>
                        <Button className={styles.btTextData} color="primary" size="sm" onClick={() => editData(data.id)}>แก้ไขข้อมูล</Button>
                        <Button className={styles.btTextData} color="danger" size="sm" onClick={() => deleteData(data.id)}>ลบข้อมูล</Button>
                    </div>
                </div>))
    }
    const addData = (selfdefense) => {
        setDatas([...datas, { id: datas[datas.length - 1].id + 1, selfdefense }])
        console.log(datas)
    }
    const deleteData = (id) => {
        console.log('delete id: ', id)
        let newDatas = datas.filter((data) => data.id !== +id)
        setDatas(newDatas)
    }
    const editData = (id) => {
        setIdEdit(id)
        let t = datas.find((data) => +data.id === +id)
        setSelfdefense(t.selfdefense)
        if (+idEdit === +id) { //Press Edit again
            let newDatas = datas.map((data, index) => {
                if (+data.id === +id)
                    datas[index].selfdefense = selfdefense
                return data
            })
            setDatas(newDatas)
            setIdEdit(0)
        }
    }
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div className={styles.textCreateSymptom}>
                        <Label for="exampleAddress">การป้องกันตนเอง</Label>
                        <Input type="text" name="addData" placeholder="ป้อนการป้องกันตนเอง ...." onChange={(e) => (setSelfdefense(e.target.value))} />

                        <div className={styles.btData}>
                            <Button className={styles.btTextData} color="success" onClick={() => addData(selfdefense)}>เพิ่มข้อมูล</Button>
                        </div>
                    </div>
                    <ul >
                        {renderDatas()}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateSymptom