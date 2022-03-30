import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CartList(props) {
    const [cart, setCart] = useContext(CartContext);
    useEffect (() => {
        console.log("CART: ", cart, "PROPSID: ", props.id);
    }, []);

    const removeFromCart = () => {
        console.log("removing from cart...", cart, "of product id: ", props.id);
        let index = cart.map(object => object.id).indexOf(props.id);
        console.log("index: ", index);
        setCart(cart.filter((_, i) => i !== index));
        console.log("cart: ", cart);
        //alert("Your item has been removed from cart!")
    }

    return (
        <>
            <Row xs={1} md={2} className="g-5">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src={props.image} /> */}
                            <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            {/* <Card.Subtitle className="mb-1 text-muted">${props.price} each</Card.Subtitle> */}
                            <Card.Subtitle className="mb-1 text-muted">Quantity: {props.quantity}</Card.Subtitle>
                            <Button variant="outline-danger" onClick={removeFromCart} value={props.id}> Remove from Cart </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
