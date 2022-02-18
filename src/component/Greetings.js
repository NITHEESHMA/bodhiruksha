import { React, Component } from "react/cjs/react.production.min";

class Greetings extends Component {
  constructor() {
    super();

    this.state = { name: "nidhi" ,email:'nitheemahindran@gmai.com' };

    this.greet=this.greet.bind(this);//es5 is work by bind then only it will work
  }

 /* greet=(element)=>
    {
      console.log('vedha',element.target.value);
      this.setState({name:element.target.value})
  }*/


  greet(element)//es5 here import done by require react from ...like
    {
      console.log('vedha',element.target.value);
      this.setState({name:element.target.value})
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.name}</p>
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <p>{this.state.name}</p>




      

       {/* <button onClick={()=>{
            this.setState({name:'felight'})
        }}>click here</button>*/}

{/*<input onChange={
(e)=>{
    this.setState({name:e.target.value})
}

}>


</input>


<input onChange={
    (e)=>{
        this.setState({email:e.target.value})
    }
    
    }>
    
    
    
  </input>*/}

       

  {/*<button onClick={
    (element)=>
    {
      this.setState({name:element.target.value})
  }
}>
click me</button>*/}

<button onClick={this.greet} value='god is love'>
click me</button>


</div>
)
}
}
export default Greetings;