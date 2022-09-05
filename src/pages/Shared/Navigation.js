import './Navigation.css';

import React from 'react';

import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';

import logo from '../../images/full-logo.png';

const Navigation = () => {
    return (
        <>
            <Navbar className='navs-bg py-3' collapseOnSelect expand="lg">
                <Container>
                    <img className='logo' src={logo} alt="" />

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-5 ">
                            <Nav.Link className='navs' href="#features">Flight</Nav.Link>
                            <Nav.Link className='navs' href="#pricing">Bus</Nav.Link>
                            <Nav.Link className='navs' href="#features">Hotel</Nav.Link>
                            <Nav.Link className='navs' href="#pricing">Holiday</Nav.Link>
                            <Nav.Link className='navs' href="#features">Visa</Nav.Link>
                            <Nav.Link className='navs' href="#pricing">Guide</Nav.Link>
                            <Nav.Link className='navs' href="#pricing">Blog</Nav.Link>
                            {/* <Nav.Link href="#features">Travel Advisory</Nav.Link> */}
                            <Nav.Link className='navs' href="#pricing">Promotion</Nav.Link>
                            <Nav.Link className='navs' href="#pricing">Holiday</Nav.Link>
                            <Nav.Link className='navs' href="#features">Visa</Nav.Link>


                            {/* <Nav.Link href="#pricing">Blog</Nav.Link> */}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>






        </>
    )
}

export default Navigation;