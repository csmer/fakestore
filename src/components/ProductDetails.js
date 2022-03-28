import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { CartContext } from '../contexts/CartContext';

export default function ProductDetails(props) {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [quantityInput, setQuantityInput] = useState(1);
    const cart = useContext(CartContext);

    useEffect(() => {
        async function getData(){
            const response = await fetch `https://fakestoreapi.com/products`;
            const jsonData = await response.json();
            setData(jsonData[id-1]);
            console.log(jsonData[id-1]);
            setIsLoaded(true);
        }
        getData();
    }, []);

    const handleQuantity = (e) => {
        const input = e.target.value;
        console.log(input);
        setQuantityInput(input);
        console.log("form changed!")
    }

    const addToCart = (e) => {
        e.preventDefault();
        console.log("carted!", quantityInput, cart)
        cart.push(quantityInput);
    }

    if (isLoaded){
        return( 
        <>
            <Card className="text-center" border="light" style={{ width: '30rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Header>ID: {id}</Card.Header>
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${data.price}</Card.Subtitle>
                <Card.Subtitle className="mb-1 text">{data.category.toUpperCase()}</Card.Subtitle>
                <Card.Text>{data.description}</Card.Text>
                <Form>
                    <Form.Group className="mb-3" controlId="formQuantity">
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter quantity here..." 
                            value={quantityInput}
                            onChange={handleQuantity} 
                        />        
                    </Form.Group>
                    <Button variant="primary" onClick={addToCart}> Add to Cart </Button>
                </Form>
            </Card.Body>
            </Card>
        </>
        )
    }
    return (
        <>
          <div> Loading Product Details...</div>  
        </>
    )
}