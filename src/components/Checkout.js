import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Checkout() {
    const cart = useContext(CartContext);
    useEffect (() => {
        console.log(cart);
    });
    return (
        <>
            <div> Checkout. </div>
        </>
    )
}