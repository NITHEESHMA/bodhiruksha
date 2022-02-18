
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col,Form,FormControl,Nav,Navbar,input } from 'react-bootstrap';
import { faAmbulance, faAnchor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navigation = () => {
    return (
        <div>
        


  
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">SOAPS</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
    </Nav>
    <h4><FontAwesomeIcon icon={faAmbulance} color="green" /></h4>
    <h4><FontAwesomeIcon icon={faAnchor} color="yellow" /></h4>
    </Container>
  </Navbar>

  <br />
  

        </div>
    );
};

export default Navigation;