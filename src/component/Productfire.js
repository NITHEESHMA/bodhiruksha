import { Component ,React} from "react/cjs/react.production.min";

import './productfire.css';

class Productfire extends Component{

    constructor(){
        super();
        this.state={products:[]};
    };
    componentDidMount(){
        fetch('http://localhost:3000/product.json')/////https://react1-b1f0f.web.app/product.json///'http://localhost:3000//https://react1-b1f0f.web.app
        .then(response=>response.json())
        .then(items=>this.setState({products:items}));
    }
    render(){
        return(

            <div className="first">
            {this.state.products.map(product=>
               ( <div keys={product.id}>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                    </div>
                
            ))}
            
            
            </div>
        );
    }
}
export default Productfire;
