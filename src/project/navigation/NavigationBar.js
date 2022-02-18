import { Component,React} from "react/cjs/react.production.min";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product1 from "../product/Product1";
import { faAmbulance, faAnchor, faCartShopping, faLandmark, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button,Nav,NavLink,Navbar,NavDropdown,Container, Form,FormControl} from 'react-bootstrap';
const NavigationBar = () => {
 
    return (
        <div>
            
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/image"><img src="https://tse1.mm.bing.net/th?id=OIP.0rLczeFCG9lKKp6WH62BKwHaBy&pid=Api&rs=1&c=1&qlt=95&w=454&h=109" style={{width:"50px"}}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        <Nav.Link href="/home" className=" text-primary">Home</Nav.Link>
        <Nav.Link href="/about" className=" text-primary">
          About
        </Nav.Link>
        <Nav.Link href="/product" className="text-primary">Product</Nav.Link>
        <NavDropdown title="Shoes" id="navbarScrollingDropdown" style={{color:"blue"}}>
          <NavDropdown.Item href="/mens" className="text-primary" >Mens shoes</NavDropdown.Item>
          <NavDropdown.Item href="/womens" className="text-primary">womens shoes</NavDropdown.Item>

          <NavDropdown.Item href="/kids" className="text-primary">
            kids shoes </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      {/*<Form className="d-flex">
        <FormControl 
          type="search"
          placeholder="Search"
          className="me-1 text-primary"
          aria-label="Search"
        />
        <Button variant="outline-success text-primary bg-dark">Search</Button>
    </Form>*/}
<div className="w-25 pe-5 me-5" >
<i style={{marginRight:"10px",gap:"2cm",fontSize: "2rem"}}>


<a href="/user"><FontAwesomeIcon className="me-4" icon={faUser} /></a>

<a href="/cart"><FontAwesomeIcon className="me-4" icon={faCartShopping} /></a>
<a href="/map"><FontAwesomeIcon className="me-4" icon={faLandmark} /></a>


</i></div>


    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
};

export default NavigationBar;
{/*onChange={this.filterproduct}*/}