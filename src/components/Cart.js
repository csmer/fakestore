import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
    const cart = useContext(CartContext);
    useEffect (() => {
        console.log(cart);
    });
    return (
        <>
            <div> Cart. {cart[0]}</div>
        </>
    )
}