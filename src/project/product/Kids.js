import React, { Component } from 'react';


/*class Kids extends Component {

    constructor(){
        super();
        this.state={product:[]};
    };
fetchElement=()=>{
    fetch('http://localhost:3000/kid.json').then(response=>response.json())
    .then(items=>this.setState({product:items}));
}
componentDidMount(){
    this.fetchElement();
}


    render() {
        return (
            
            <div className='container w-100 h-100 bg-warning'>
            <div className="row p-2 m-1">
            {this.state.product.map(kid=>
               
                (  <div className="col-4 w-5" style={{marginBottom:"10px"}}>
             <div className="card" style={{width:"15rem",alignItems:"center"}}>
             <div className="card-body">
                   
                 
                    
                 <div className="img"><img src={kid.image} width="70px"/></div>
            
                 
                 <h1 className="card-title">{kid.name}</h1>
 
                 
                 <h2 className="card-text">{kid.price}</h2>
                 <h5 className="keys">{kid.des}</h5>
                
                </div>
               </div>
            </div>
                 
             ))}
             </div>

        </div>
        );
    }
}





export default Kids;*/


const Kids = () => {
    return (
        <div className='container'>
            
        <div className='row d-flex'>

        <div className='col-4 d-flex'>
        
        <div><img src='https://tse1.mm.bing.net/th?id=OIP.QNH_eVUmV5qNCXTrBBD5DAHaHa&pid=Api&P=0&w=161&h=161'></img>
        <h1 style={{fontSize:"13px",color:"green"}}>Lether boot<br/>40% off</h1>
        </div>
        <div><img src='https://tse1.mm.bing.net/th?id=OIP.QApCniG-TvimEsPk_5N0lwHaJg&pid=Api&P=0&w=120&h=154'></img>
        <h1 style={{fontSize:"13px",color:"green"}}>yellow boot<br/>40% off</h1>
        </div>
        
        <div><img src='https://tse4.mm.bing.net/th?id=OIP.R4MfFqrGAREZ-txFxSCyMQHaHa&pid=Api&P=0&w=173&h=173'></img>
        <h1 style={{fontSize:"13px",color:"green"}}>Pink boot<br/>40% off</h1>
        </div>
        
        <div><img src='https://tse4.mm.bing.net/th?id=OIP.JtVk6iE_VA1Htnb96e4rrAHaHa&pid=Api&P=0&w=166&h=166'></img>
        <h1 style={{fontSize:"13px",color:"green"}}>casual boot<br/>40% off</h1>
        </div>
        <div><img src='https://tse2.mm.bing.net/th?id=OIP.8JbgJyKxVjPjz18SvGYsHQHaHa&pid=Api&P=0&w=163&h=163'></img>
        <h1 style={{fontSize:"13px",color:"green"}}>Winter boot<br/>40% off</h1>
        </div>
        
        <div><img src='https://tse1.mm.bing.net/th?id=OIP.UQYVpWjUjzSnIyUBpa8QDwHaHa&pid=Api&P=0&w=171&h=171'></img>
<h1 style={{fontSize:"13px",color:"green"}}>Summer boot<br/>40% off</h1>
</div>

        
        
        
        </div>
        
        
        </div>
        
        
        <div className='row d-flex'>

        <div className='col-4 d-flex'>
        
        <div><img src='https://tse1.mm.bing.net/th?id=OIP.QNH_eVUmV5qNCXTrBBD5DAHaHa&pid=Api&P=0&w=161&h=161'></img>
        <h1 style={{fontSize:"13px",color:"green"}}>Lether boot<br/>40% off</h1>
        </div>
        <div><img src='https://tse1.mm.bing.net/th?id=OIP.QApCniG-TvimEsPk_5N0lwHaJg&pid=Api&P=0&w=120&h=154'></img>
        <h1 style={{fontSize:"13px",color:"green"}}>yellow boot<br/>40% off</h1>
        </div>
        
        <div><img src='https://tse4.mm.bing.net/th?id=OIP.R4MfFqrGAREZ-txFxSCyMQHaHa&pid=Api&P=0&w=173&h=173'></img>
        <h1 style={{fontSize:"13px",color:"green"}}>Pink boot<br/>40% off</h1>
        </div>
        
        <div><img src='https://tse4.mm.bing.net/th?id=OIP.JtVk6iE_VA1Htnb96e4rrAHaHa&pid=Api&P=0&w=166&h=166'></img>
        <h1 style={{fontSize:"13px",color:"green"}}>casual boot<br/>40% off</h1>
        </div>
        <div><img src='https://tse2.mm.bing.net/th?id=OIP.8JbgJyKxVjPjz18SvGYsHQHaHa&pid=Api&P=0&w=163&h=163'></img>
        <h1 style={{fontSize:"13px",color:"green"}}>Winter boot<br/>40% off</h1>
        </div>
        
        <div><img src='https://tse1.mm.bing.net/th?id=OIP.UQYVpWjUjzSnIyUBpa8QDwHaHa&pid=Api&P=0&w=171&h=171'></img>
<h1 style={{fontSize:"13px",color:"green"}}>Summer boot<br/>40% off</h1>
</div>

        
        
        
        </div>
        
        
        </div>
        
        


        </div>
    );
};

export default Kids;



