
import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import '../styles/_Navigation.scss'


export default function Navigation() {
    return (

        <Router>

        <div className="route-container">
           
            <Navbar className="nav-color" bg="dark" expand="lg" variant="dark">
                
                <Navbar.Brand as={Link} to='/'>
                    <h1 id="store-name">Gift Store</h1>
                </Navbar.Brand>                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" id="nav">
                    <Nav.Link href="/">Home</Nav.Link> 

                    
                 <NavDropdown title="Products" id="basic-nav-dropdown">
                      
                        <NavDropdown.Item href="/giftBasket/3.1">Gift Baskets</NavDropdown.Item>
                        <NavDropdown.Item href="/flowers/3.2">Flowers</NavDropdown.Item> 
                         <NavDropdown.Item href="/partySupplies/3.3">Party Supplies</NavDropdown.Item>
                    </NavDropdown>     
                    <Nav.Link href="/myCart">My Cart</Nav.Link>
                    <Nav.Link href="/myProfile">Order Summary</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                  </Nav> 
                  </Navbar.Collapse>
            
            </Navbar> 
        </div> 
   
     </Router>

    )
}
