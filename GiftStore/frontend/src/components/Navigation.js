// 

import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, NavDropdown, NavLink , Container} from 'react-bootstrap'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import '../styles/_Navigation.scss'
import MyCart from './MyCart'

export default function Navigation() {
    return (

        <Router>

        <div className="route-container">
           
            <Navbar className="nav-color" bg="dark" expand="lg" variant="dark">
                
                <Navbar.Brand as={Link} to='/Home'>
                    <h1 id="store-name">Gift Store</h1>
                </Navbar.Brand>
                {/* <Nav className="route-navBar">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/flowers">Flowers</Nav.Link>
                    <Nav.Link href="/handmade">Handmade Gifts</Nav.Link>
                    <Nav.Link href="/partySupplies">Party Supplies</Nav.Link> 
                    
                    <Nav.Link href="/myCart">My Cart</Nav.Link>
                    <Nav.Link href="/myProfile">My Profile</Nav.Link>
                    <Nav.Link href="/review">Leave a Review</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>

                    </Navbar> */}
                                       {/* <Nav.Link to="/myCart">My Cart</Nav.Link>
                    <Nav.Link as= {NavLink} to='/myProfile'>My Profile</Nav.Link>
                    <Nav.Link as= {Link} to='/review'>Leave a Review</Nav.Link>
                <Nav.Link as= {Link} to='/contact'>Contact</Nav.Link> 
                
                </Nav>


            </Navbar>    */}
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" id="nav">
                    <Nav.Link href="/">Home</Nav.Link> 

                    
                 <NavDropdown title="Products" id="basic-nav-dropdown">
                      
                        <NavDropdown.Item href="/giftBasket/3.1">Gift Baskets</NavDropdown.Item>
                        <NavDropdown.Item href="/flowers/3.2">Flowers</NavDropdown.Item> 
                         <NavDropdown.Item href="/partySupplies/3.3">Party Supplies</NavDropdown.Item>
                    </NavDropdown>     
                    {/* <Nav.Link href="/flowers">Flowers</Nav.Link>
                    <Nav.Link href="handmade">Handmade Gifts</Nav.Link>
                    <Nav.Link href="/partySupplies">Party Supplies</Nav.Link> */}
                    
                    <Nav.Link href="/myCart">My Cart</Nav.Link>
                    <Nav.Link href="/myProfile">Order Summary</Nav.Link>
                    {/* <Nav.Link href="/review">Leave a Review</Nav.Link> */}
                    <Nav.Link href="/contact">Contact</Nav.Link>

                    {/* <Navbar.Text className="contact-text">
      Contact: <a href="#login">123-456-0987</a><br/>
      Address:133, wfdsfcds, tx
    </Navbar.Text> */}
                                       {/* <Nav.Link to="/myCart">My Cart</Nav.Link>
                    <Nav.Link as= {NavLink} to='/myProfile'>My Profile</Nav.Link>
                    <Nav.Link as= {Link} to='/review'>Leave a Review</Nav.Link>
                <Nav.Link as= {Link} to='/contact'>Contact</Nav.Link> */}
{/* 
                    </Nav> 


                 <Nav className="route-navBar">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Link to="/myCart">My Cart</Link>
                    <Nav.Link href="/flowers">Flowers</Nav.Link>
                    <Nav.Link href="handmade">Handmade Gifts</Nav.Link>
                    <Nav.Link href="/partySupplies">Party Supplies</Nav.Link>
                    <Nav.Link href="/myCart">My Cart</Nav.Link>
                </Nav> */}

                  </Nav> 
                  </Navbar.Collapse>
            
            </Navbar> 
            
     
        </div> 
        {/* <Footer /> */}
     </Router>

    )
}
