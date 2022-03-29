import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CartList(props) {
    const [cart, setCart] = useContext(CartContext);
    useEffect (() => {
        console.log(cart);
    }, []);

    const removeFromCart = () => {
        console.log("removing from cart...", cart);
        setCart([]);
        alert("Your item has been removed from cart!")
    }

    return (
        <>
            <Row xs={1} md={2} className="g-5">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={props.image} />
                            <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle className="mb-1 text-muted">${props.price} ea</Card.Subtitle>
                            <Card.Subtitle className="mb-1 text-muted">Quantity: {props.quantity}</Card.Subtitle>
                            <Button variant="outline-danger" onClick={removeFromCart}> Remove from Cart </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
