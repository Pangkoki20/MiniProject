import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, Nav, NavItem } from 'reactstrap';
import styles from '../styles/Create.module.css';

function CreateSymptom() {

    return (
        <div className="pageAddfish" >
            <Container>
                <Form>
                    <Row>
                        <Col align="left">
                            <Nav className="ml-auto">
                                <NavItem> <a href="/datafish" className="text_nav"> Home </a> <span>&nbsp;</span>/ </NavItem>
                                <NavItem> <a href="/addfish" className="text_nav1"> <span>&nbsp;</span>Add data</a> </NavItem>
                            </Nav>
                        </Col>
                        {/* <Navbars /> */}
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup align="center">
                                <div>
                                    <h2 className={styles.textHead2}>เพิ่มอาการโควิด - 19 </h2>
                                </div>
                                <Input className={styles.ip2} type="text" autocomplete="off" name="id" placeholder="อาการ" />
                                <div className={styles.formIP2}>
                                    {/* <Label className={styles.textLabel}>อาการ</Label> */}
                                </div>
                                <Input className={styles.ip2} type="text" autocomplete="off" name="local_name" placeholder="ลักษณะอาการ" />
                                <div className={styles.formIP2}>
                                    {/* <Label className={styles.textLabel}>ลักษณะอาการ</Label> */}
                                </div>

                                <div className={styles.formIP2}>
                                    {/* <Label className={styles.textLabel}> </Label> */}
                                </div>
                                <Input className={styles.ip3} type="textarea" autocomplete="off" name="image" placeholder="ลิงค์แนบรูปภาพ เช่น https://upload.wikimedia.org/wikipedia/commons/f/fb/OP2.jpg" />
                                <div className={styles.formIP2}>
                                    {/* <Label className={styles.textLabel}></Label> */}
                                </div>
                                <Input className={styles.ip3} type="textarea" autocomplete="off" name="fish_detail" placeholder="คำอธิบายอาการ" />
                                <p className="message"></p>
                                <Button className={styles.bt2} style={{ width: "100%", marginTop: "50px" }}
                                    onClick={() => {
                                    }}>บันทึก</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default CreateSymptom;