

import { Component } from "react/cjs/react.production.min";
import React from "react";

class Componentlifecycle2 extends Component{
    constructor(){
        super();
        this.state={name:'nidhi'};
console.log('constructor called');
    }

static getDerivedStateFromProps(){
    console.log('getderivedstatefromprpes called');
}

shouldComponentUpdate(){
    console.log('should component called');
}



render(){
    return(

        <h1>{this.state.name}</h1>
    )
}

getSnspShotBeforeUpdate(){
    console.log('get snapshiot called');
}
componentDidMount(){
    console.log('did mount called');
}


}

export default Componentlifecycle2;