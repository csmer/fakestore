import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import React from 'react';


export default function Product(props){
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(){ 
            const response = await fetch `https://fakestoreapi.com/products`;
            const jsonData = await response.json();
            setData(jsonData);
            console.log(data);
        }
        getData();
    }, []);

    return (
        <>
            <>
                <NavBar />
            </>
            <>
                {data.map((product) => (
                    <ProductCard
                        product={product}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        id={product.id}
                    />
                ))}
            </>

        </>
    )
}