import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import CheckoutList from './CheckoutList';
import Button from 'react-bootstrap/Button'
import CheckoutForm from './CheckoutForm';

export default function Checkout() {
    const [cart, setCart] = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(1);
    useEffect (() => {
        console.log(cart);
        let tmpPrice = 0;
        for (var i = 0; i < cart.length; i++){
            console.log(cart[i].price, cart[i].quantity);
            tmpPrice += (cart[i].price * cart[i].quantity);
        }
        console.log(tmpPrice);
        setTotalPrice(tmpPrice);
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
                <Button variant="outline-success" disabled size="lg"> TOTAL PRICE: ${totalPrice} </Button>
        </>
    )
}