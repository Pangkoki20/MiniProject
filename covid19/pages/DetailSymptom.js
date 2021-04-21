import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import styles from '../styles/Detail.module.css';

function DetailSymptom() {

    return (
        <Row>
            <Col align="left">
                <Nav className="ml-auto">
                    <NavItem> <a href="/datafish" className="text_nav1"> Home </a> <span>&nbsp;</span>/</NavItem>
                    <NavItem> <a href="/addfish" className="text_nav"> <span>&nbsp;</span>Add data</a> </NavItem>
                </Nav>
            </Col>
        </Row>
    )



}

export default DetailSymptom;