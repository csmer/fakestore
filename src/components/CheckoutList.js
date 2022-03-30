import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CheckoutList(props) {
    useEffect (() => {
        console.log("CheckoutList loaded");
    }, []);
    return (
        <>
            <Row xs={1} md={1} className="g-5">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle className="mb-1 text">${props.price} each</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text">Quantity: {props.quantity}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
