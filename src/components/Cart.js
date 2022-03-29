import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartList from './CartList';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function Cart() {
    const [cart, setCart] = useContext(CartContext);
    const [cartExists, setCartExists] = useState(false);

    useEffect (() => {
        console.log(cart);
        if (cart){
            console.log("setting cart exists...")
            console.log(cart);
            setCartExists(true);
        }
    });

    if (cartExists){
        return (
            <>
                {cart.map((product) => (
                    <CartList
                        id={product.id}
                        product={product}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        quantity={product.quantity}
                    />
                ))}
            </>
        )
    }
    if(!cartExists){
        return (
            <>
                <div> Please add product(s) to the cart!</div>
                <Link to={{ pathname: `/` } }>
                    <Button variant="primary">
                        Go to products
                    </Button>
                </Link>
            </>
        )
    }

}