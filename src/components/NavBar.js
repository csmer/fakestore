import { Navbar, Nav, Container } from "react-bootstrap";
import React from 'react';

export default function NavBar() {
    return(
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">FakeStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="/checkout">Checkout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}