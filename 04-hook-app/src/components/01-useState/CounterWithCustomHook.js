import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {state, increment, reset, decrement} = useCounter();

    return (
        <div className="container mt-3">
         <h1>Counter with Hook: { state } </h1>
         <hr /> 
         <button onClick={() => increment(5)} className="btn btn-primary mr-3">+1</button>
         <button onClick={reset} className="btn btn-danger mr-3">Reset</button>  
         <button onClick={() => decrement(5)} className="btn btn-primary">-1</button>  
        </div>
    )
}
