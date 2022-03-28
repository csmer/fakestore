import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
    const cart = useContext(CartContext);

    return (
        <>
            <div> Cart. </div>
        </>
    )
}