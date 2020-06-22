import React, { useContext } from 'react';
import countercontext from './CounterContext.js';
const Child=()=>{
    let countervalue = useContext(countercontext)
    return(
    <div>
        <h1 style={{textAlign: "center"}}>PIAIC Bootcamp2020 Class-5</h1><br/><hr/>
        <h2 style={{textAlign: "center"}}>First Child using Context API</h2>
        <h3>Counter value: {countervalue[0]}</h3>
        <button onClick = {()=>{countervalue[1](++countervalue[0])}}>Increment Counter</button>
        <button onClick = {()=>{countervalue[1](--countervalue[0])}}>Decrement Counter</button>
        <br/>
        <hr/>
    </div>
    )
}

export default Child;
