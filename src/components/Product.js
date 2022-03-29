import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


export default function Product(props){
    const [data, setData] = useState([]);
    const cart = useContext(CartContext);

    useEffect(() => {
        async function getData(){ 
            const response = await fetch `https://fakestoreapi.com/products`;
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData, cart);

            // if ((typeof cart[1] === 'function')){
            //     console.log("popping...")
            //     cart.pop();
            //     cart.pop();
            //     console.log(jsonData, cart);
            // }
        }
        getData();
    }, []);

    return (
        <>
            {data.map((product) => (
                <ProductCard
                    id={product.id}
                    product={product}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </>
    )
}