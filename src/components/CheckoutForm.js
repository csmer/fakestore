import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import { CartContext } from '../contexts/CartContext';

export default function CheckoutForm(){
    const [cart, setCart] = useContext(CartContext);
    const navigate = useNavigate();

    const handleSubmit = () =>{
        console.log("Checkout submitted!")
        setCart([]);
        navigate(`/`)
    }

    return (
        <>
            <Form>
            <Form.Group className="mb-3" controlId="formQuantity">
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Enter quantity here..." 
                    // value={1}
                    // onInput={}
                />        
            </Form.Group>
            </Form>
            <Form>
            <Form.Group className="mb-3" controlId="formQuantity">
                <Form.Label>Address:</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Enter quantity here..." 
                    // value={1}
                    // onInput={}
                />        
            </Form.Group>
            </Form>
            <Form>
            <Form.Group className="mb-3" controlId="formQuantity">
                <Form.Label>Address B:</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Enter quantity here..." 
                    // value={1}
                    // onInput={}
                />        
            </Form.Group>
            </Form>
            <Form>
            <Form.Group className="mb-3" controlId="formQuantity">
                <Form.Label>Credit Card:</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Enter quantity here..." 
                    // value={1}
                    // onInput={}
                />        
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}> Submit Order! </Button>
            </Form>
        </>

    )
}