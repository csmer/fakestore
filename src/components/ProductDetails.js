import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetails() {
    let { id } = useParams();
    return (
        <>
            <div> ProductDetails: { id } </div>
        </>
    )
}