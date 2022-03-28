import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../contexts/CartContext';

export default function ProductCard(props){
    const cart = useContext(CartContext);
    return (
        <>
            <Row xs={1} md={2} className="g-5">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={props.image} />
                            <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle className="mb-1 text-muted">${props.price}</Card.Subtitle>
                            <Link to={{ pathname: `/products/${props.id}` } }>
                                <Button variant="info">
                                    Details (ID: {props.id})
                                </Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}