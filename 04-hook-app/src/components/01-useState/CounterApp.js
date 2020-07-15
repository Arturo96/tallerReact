import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const {counter1, counter2} = state;

    return (

        <div className="container mt-3">
         <h2>Counter1 {counter1}</h2>
         <h2>Counter2 {counter2}</h2>
         <hr /> 

         <button onClick={() => setState({
             ...state,
             counter1: counter1 + 1
         })} className="btn btn-primary mr-3">+1</button>
        </div>
    )
}
