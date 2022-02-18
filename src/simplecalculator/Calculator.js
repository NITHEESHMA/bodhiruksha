import React from "react";
import {useState} from "react";
import './calculator.css';

const Calculator =()=>{

const [ValueA,setValueA]= useState(0);
const [ValueB,setValueB]= useState(0);
const [Operations,setOperations]= useState('+');
const [Result,setResult]= useState(0);


const handlerSubmit=()=>{
if(Operations==='+'){
    setResult(parseInt(ValueA)+parseInt(ValueB));
}

if(Operations==='-'){
    setResult(parseInt(ValueA)-parseInt(ValueB));
}

if(Operations==='*'){
    setResult(parseInt(ValueA)*parseInt(ValueB));
}

if(Operations==='/'){setResult(parseInt(ValueA)/parseInt(ValueB));
}
}

    return(
        <div className="calc">
        <h1>simple calculator</h1>
        <h3>result:{Result}</h3>
        
        <div className="calc1">
<input type='text' className="ca1" value={ValueA} onChange={(e)=>setValueA(e.target.value)}/><br/>
<input type='text' className="ca2" value={ValueB} onChange={(e)=>setValueB(e.target.value)}/><br/>

</div>
<div className="calc2">
<button onClick={()=>setOperations('+')}>+</button>
<button onClick={()=>setOperations('-')}>-</button>
<button onClick={()=>setOperations('*')}>*</button>
<button onClick={()=>setOperations('/')}>/</button>
</div>
<button onClick={handlerSubmit}>submit</button>
        
        </div>
    )
}

export default Calculator;