import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

export default function Navigation() {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="/Home">
                    <h1>Gift Store</h1>
                </Navbar.Brand>
                <Nav classNMe="route-navBar">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/flowers">Flowers</Nav.Link>
                    <Nav.Link href="handmade">Handmade Gifts</Nav.Link>
                    <Nav.Link href="/partySupplies">Party Supplies</Nav.Link>
                    <Nav.Link href="/myCart">My Cart</Nav.Link>
                    <Nav.Link href="/myProfile">My Profile</Nav.Link>
                    <Nav.Link href="/review">Leave a Review</Nav.Link>
                    <Nav.Link href="/">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
