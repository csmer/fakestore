import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';

export default function NavBar() {
    return(
        <>
            <Navbar bg="light" sticky="top">
            <Container>
                <Link to={{ pathname: `/`}} style={{ textDecoration: 'none', color: `black`}}>Micah's Totally Real Store</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Browse" id="basic-nav-dropdown">
                            <Link to={{ pathname: `/`}} style={{ textDecoration: 'none', color: 'black'}}> Products </Link>
                            <NavDropdown.Divider />
                            <Link to={{ pathname: `/cart`}} style={{ textDecoration: 'none', color: 'black'}}> Cart </Link>
                            <NavDropdown.Divider />
                            <Link to={{ pathname: `/checkout`}} style={{ textDecoration: 'none', color: 'black'}}> Checkout </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}