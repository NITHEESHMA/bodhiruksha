import  { Component,React } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col,Card,Form,FormControl } from 'react-bootstrap';
import './product1.css';


class Product1 extends Component {

constructor(){
        super();
        this.state={product1:[]};
    };
    fetchElement=()=>{
        fetch('http://localhost:3000/boot.json')
        .then(response=>response.json())
        .then(items=>this.setState({product1:items}));
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
                product1:this.state.product1.filter(el=>
                     el.name.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1),
            }
        )
          }
    }
    render() {
        return (
         

            <div className='container w-100 h-100 bg-warning'>
           <div> <Form className="d-flex mt-3">
            <FormControl onChange={this.filterproduct}
              type="search" style={{marginLeft:"300px"}}
              placeholder="Search"
              className="me-1 text-primary w-25"
              aria-label="Search"
            />
            <Button variant="outline-success text-primary bg-dark">Search</Button>
    </Form></div>
            <div className="row p-2 m-1">
            {this.state.product1.map(boot=>
               
                (  <div className="col-4 w-5" style={{marginBottom:"10px"}}>
             <div className="card" style={{width:"15rem",alignItems:"center"}}>
             <div className="card-body">
                   
                 
                    
                 <div className="img"><img src={boot.image} width="70px"/></div>
            
                 
                 <h1 className="card-title">{boot.name}</h1>
 
                 
                 <h2 className="card-text">{boot.price}</h2>
                 <h5 className="keys">{boot.des}</h5>
                
                </div>
               </div>
            </div>
                 
             ))}
             </div>
             </div>
            
             
         );
     }
 }
 
 export default Product1;
            
        
