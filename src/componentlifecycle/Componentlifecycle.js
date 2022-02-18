import React from "react";
import { Component } from "react/cjs/react.production.min";


{/*class Componentlifecycle extends Component{
    constructor(){
        super();

        this.state={name:'nidhi',email:'nithe@gmail'}
    }

    getDerivedStateFormProps(){

       console.log('get derivedfunction called');
    }
    componentDidMount=()=>{
        console.log('componentdid mount function called');
    }
    render(){
        return(
            <div>
            <p>{this.state.name}</p>
            <p>{this.state.email}</p>
            <input onChange={
                (e)=>{
            this.setState({name:e.target.value})
            }
        }
        >
    </input>

    
            </div>
        )
    }

   
}
export default Componentlifecycle;*/}

    class Componentlifecycle extends Component{
        constructor(){
            super();
console.log('constructor called');
        }

        static getDerivedStateFromProps(){
            console.log('get derived state from propes called')
        }

doSomthing=(e)=>{
    console.log('called nithi'+ e.Target.innerText);
}

        render()
{

    console.log('render function called');
    return(

        <div>
        <h1>componentlife componentlifecycle</h1>
        <button onClick={this.doSomthing}>clickme1</button>
        <button onClick={this.doSomthing}>clickme2</button>
        
        </div>
    )
}

componentDidMount(){
console.log('component did mount function called');
}
    }

export default Componentlifecycle;