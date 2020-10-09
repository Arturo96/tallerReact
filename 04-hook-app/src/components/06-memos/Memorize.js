import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const {state:counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div className="container mt-3">
            <h1 className="text-center">
                Counter: <Small value={counter} />
            </h1>
            <hr />

            <button onClick={() => increment(1)} className="btn btn-primary mr-3">+1</button>

            <button onClick={() => setShow(!show)} className="btn btn-outline-primary"> Show/Hide {JSON.stringify(show)} </button>
        </div>
    )
}
