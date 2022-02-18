import { Component,React} from "react/cjs/react.production.min";
import './products.css';
class Products extends Component{

    constructor(){
        super();
        this.state={products:[
            {name:'sugar',price:100},
            {name:'salt',price:10},
            {name:'rice',price:100},
            {name:'oil',price:120},
            {name:'vegetables',price:230},
        ]};
    
    };
render(){
    return(

        <div className="app">
       { this.state.products.map(product=>
        (
<div>
<h1>{product.name}</h1>
<h1>{product.price}</h1>

</div>


        )
        )}
        
        </div>
    );
}

    }
    export default Products;
