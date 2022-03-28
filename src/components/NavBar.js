import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';

export default function NavBar() {
    return(
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Link to={{ pathname: `/`}}>Micah's FakeStore</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to={{ pathname: `/`}}>Products</Link>
                    <Link to={{ pathname: `/cart`}}>Cart</Link>
                    <Link to={{ pathname: `/checkout`}}>Checkout</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}