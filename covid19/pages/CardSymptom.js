import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Spinner
} from 'reactstrap';
import styles from '../styles/Detail.module.css';

function CardSymptom() {
    return (
        <Row>

            <Col>
                <Card style={{ width: "300px" }}>
                    <CardImg top width="100%" className={styles.tpic} alt="รูปอาการ" />
                    <CardBody>
                        <CardTitle><h1 style={{ fontSize: "25px", fontWeight: "bold" }}></h1></CardTitle>
                        <CardTitle><span style={{ fontWeight: "bold" }}>อาการ :</span> <p></p></CardTitle>
                        <CardSubtitle><span style={{ fontWeight: "bold" }}>ลักษณะอาการ : </span><p></p></CardSubtitle>
                        <CardText><span style={{ fontWeight: "bold" }}>คำอธิบายอาการ : </span></CardText>
                        {/* <Button className="btlike" onClick={() => {
                            addLike(item.id)
                        }}>Like </Button> */}
                    </CardBody>
                </Card>
            </Col>


            <ModalHeader>Update Data Symptom</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Input className={styles.ip4} type="hidden"
                    />
                    <Label className={styles.textLabel1}>ชื่ออาการ</Label>
                    <Input className={styles.ip4} type="text" />
                    <br></br>
                    <Label className={styles.textLabel1}>ลักษณะอาการ</Label>
                    <Input className={styles.ip4} type="text" />
                    <br></br>
                    <Label className={styles.textLabel1}>Scientific Name</Label>
                    <Input className={styles.ip4} type="text" />
                    <br></br>
                    <Label className={styles.textLabel1}>ลิงค์สำหรับรูปภาพ</Label>
                    <Input className={styles.ip5} type="textarea" />
                    <br></br>
                    <Label className={styles.textLabel1}>คำอธิบายอาการ</Label>
                    <Input className={styles.ip5} type="textarea" />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" >Update</Button>
                <Button color="secondary">Cancel</Button>
            </ModalFooter>
        </Row>
    )
}
export default CardSymptom;