import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col,Form,FormControl, Toast,NavbarBrand } from 'react-bootstrap';
import './home.css';

class Home extends Component {

constructor(){
        super();
        this.state={homes:[]};
    };
    fetchElement=()=>{
        fetch('http://localhost:3000/home.json')/////https://react1-b1f0f.web.app/product.json///'http://localhost:3000//https://react1-b1f0f.web.app
        .then(response=>response.json())
        .then(items=>this.setState({homes:items}));
    }

    componentDidMount(){
      this.fetchElement();
    }
    filterproduct=(e)=>{
if(e.target.value ==''){
  this.fetchElement();
}
else{

        this.setState(
            {
                homes:this.state.homes.filter(el=>
                     el.name.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1),
            }
        )
          }
    }


  /* function Example() {
        const [showA, setShowA] = useState(true);
        const toggleShowA = () => setShowA(!showA);

        return(
            <div>
            <Button onClick={toggleShowA} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </Button>
          <Toast show={showA} onClose={toggleShowA}></Toast>
          </div>
        )
    }*/

    render() {
        return (
            
            <div className="container">

            <div className='search'>
            
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <a className="navbar-brand text-primary" href="#">FURNITURES</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link text-primary" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="/about">About</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-primary" href="/product">Product</a>
                </li>
               
              </ul>
              

              <Form className="d-flex m-2">
              <FormControl onChange={this.filterproduct}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"/>
              <Button variant="outline-success text-primary">Search</Button>
            </Form>



            </div>
          </nav>



        
            
          <br/>
            </div>
            
            <div className="row p-2 m-1">
           
          
            {/*<h1> SOAPS</h1>
        
        <Button variant="primary">click here for your fav soap</Button>*/}
            {this.state.homes.map(home=>
               
               (  <div className="col-4 w-5" style={{marginBottom:"20px"}}>
               <Toast className="toast">
               <Toast.Header>

               
               {/*<button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>*/}
            

              <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
                  
                
                   
                <div className="img"><img src={home.image} width="70px"/></div>
           
                <h5 className="keys">{home.id}</h5>
                <h1 className="card-title">{home.name}</h1>

                
                <h2 className="card-text">{home.price}</h2>
               
               </div>
              </div>
                

               
                </Toast.Header>
                <Toast.Body className='button'><button>order now</button></Toast.Body>
                </Toast>
                </div>
                
            ))}
            </div>
            </div>
        );
    }
}

export default Home;