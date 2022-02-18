import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col,Card,Form } from 'react-bootstrap';
const User = () => {
    return (
        <div>
            
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
       
        <Form.Group as={Row} className="mb-1" controlId="formHorizontalCheck">
          <Col sm={{ span: 2, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-2">
          <Col sm={{ span: 4, offset: 1 }}>
            <Button type="submit" style={{borderRadies:"50px",fontSize:"15px"}}>Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
        </div>
    );
};

export default User;