import React, { useReducer } from 'react';
import counterReducer from './CounterReducer.js';
const Child2 = () =>{
    let [state, dispatch] = useReducer(counterReducer, 0);
    console.log(state);
    return(
        <div>
            <h2 style = {{textAlign:"center"}}>Second Child using Reducer API</h2>
            <h3>Value of Reducer: {state}</h3>
            <button onClick = {()=>{dispatch('INCREMENT')}}>Increment Reducer</button>
        </div>
    )
}

export default Child2;