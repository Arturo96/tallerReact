import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => setCounter(counter + 1);

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num);
        },
        [setCounter]
    )

    return (
        <div className="container mt-3">
            <h1 className="text-center">useCallback Hook: {counter}</h1>
            <hr />

           <ShowIncrement increment={increment} />
        </div>
    )
}
