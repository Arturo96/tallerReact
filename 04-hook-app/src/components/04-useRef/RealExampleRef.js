import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="container mt-3">
            <h1 className="text-center display-4">Uso real del useRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button onClick={() => setShow(!show)} className="btn btn-primary">Show/Hide</button>

        </div>
    )
}
