import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function ProductCard(props){
    let navigate = useNavigate();
    let { id = props.id } = useParams();

    return (
        <>
            <Row xs={1} md={2} className="g-1">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={props.image} />
                            <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle className="mb-1 text-muted">${props.price}</Card.Subtitle>
                            <Button variant="info" onClick={() => {navigate("/products/:" + id)}}>Details (ID: {props.id})</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${props.price}</Card.Subtitle>
                <Button variant="primary">Details</Button>
            </Card.Body>
            </Card> */}
        </>
    )
}