import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import CheckoutList from './CheckoutList';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import CheckoutForm from './CheckoutForm';

export default function Checkout() {
    const [cart, setCart] = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(1);
    useEffect (() => {
        console.log(cart);
        // iterate through cart and multiply * product's quantities by price and sum
        let tmp = 0;
        tmp = 2 * 4; // calculate here
        setTotalPrice(tmp);
    });
    return (
        <>  
                {cart.map((product) => (
                    <CheckoutList
                        id={product.id}
                        product={product}
                        title={product.title}
                        price={product.price}
                        quantity={product.quantity}
                    />
                ))}
                <CheckoutForm/>
                <div>TOTAL PRICE: ${totalPrice}</div> 
        </>
    )
}