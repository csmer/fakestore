import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


export default function Checkout() {
    const cart = useContext(CartContext);

    return (
        <>
            <div> Checkout. </div>
        </>
    )
}