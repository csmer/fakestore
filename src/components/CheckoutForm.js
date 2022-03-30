import React, { useContext } from 'react';
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
        alert("Checkout successful! Going back to the products page...")
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="checkoutName">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="John Doe" 
                    />
                    {/* <Form.Text className="text-muted"> First and Last Name</Form.Text>         */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkoutShipping">
                    <Form.Label>Shipping Address:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="1234 North Apple Avenue" 
                    />        
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkoutBilling">
                    <Form.Label>Billing Address:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="1234 North Apple Avenue" 
                    />        
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkoutCreditCard">
                    <Form.Label>Credit Card:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="1234 5678 9876 5432" 
                    />        
                </Form.Group>
                <Button className="mb-3" variant="primary" onClick={handleSubmit}> Submit Order! </Button>
            </Form>
        </>
    )
}