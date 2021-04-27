import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Col, Row, Container, FormGroup, CustomInput, Label, Button, Input } from 'reactstrap';


export default function CreateSymptom() {
    return (
        <div>
            <Navbar />
            <Container>
                <div className={styles.textCreateSymptom}>เพิ่มข้อมูลการป้องกันตนเอง</div>
                <div className={styles.formImgCreateSymptom}>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <FormGroup className={styles.textChoosePic}>
                                <Label for="exampleCustomFileBrowser">เพิ่มรูปภาพ</Label>
                                <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                            </FormGroup>
                            {/* <Button color="primary" size="sm">Upload</Button>
                            <Button color="danger" size="sm">Delete</Button> */}
                        </Col>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <div className={styles.textData}>
                                <Label for="exampleAddress">การป้องกันตนเอง</Label>
                                <Input type="text" name="dataSymptom" id="dataSymptom" placeholder="" />
                            </div>
                        </Col>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Button color="primary" size="lg" block>Block level button</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div >
    )
}
