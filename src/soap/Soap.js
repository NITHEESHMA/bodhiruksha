import { Component,React} from "react/cjs/react.production.min";
import './soap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col,Form,FormControl, Toast } from 'react-bootstrap';

class Soap extends Component{
    constructor(){
        super();
        this.state={soaps:[]};
    };
    componentDidMount(){
        fetch('http://localhost:3000/soap.json')/////https://react1-b1f0f.web.app/product.json///'http://localhost:3000//https://react1-b1f0f.web.app
        .then(response=>response.json())
        .then(items=>this.setState({soaps:items}));
    }

    filterproduct=(e)=>{
        this.setState(
            {
                soaps:this.state.soaps.filter(el=>
                     el.name.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1),
            }
        )

    }


   



    render(){
        return(

            <div className="container">

            <div>
            
            <Form className="d-flex">
            <FormControl onChange={this.filterproduct}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <br/>
            </div>
            
            <div className="row">
           
          
            {/*<h1> SOAPS</h1>
        
        <Button variant="primary">click here for your fav soap</Button>*/}
            {this.state.soaps.map(soap=>
               
               (  <div className="col-4" style={{marginBottom:"30px"}}>
              {/*} <Toast>
               <Toast.Header>

               
               {/*<button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>*/}
              

              {/* <div className="card" style={{width:"18rem"}}>
               <div className="card-body">
            */}
                
                   
                <div className="soap"><img src={soap.image} width="100px"/></div>
           
                <h5 className="keys">{soap.id}</h5>
                <h1 className="card-title">{soap.name}</h1>

                
                <h2 className="card-text">{soap.price}</h2>
               
              {/* </div>
        </div>*/}
                

               
               {/* </Toast.Header>
            </Toast>*/}

                </div>
                
            ))}
            </div>
            </div>
            
        );
    }

}
export default Soap;
