import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center display-4">Focus Screen</h1>
            <hr />

            <input type="text" ref={inputRef} className="form-control" placeholder="Ingrese su nombre" />
            <button onClick={handleClick}
             className="btn btn-outline-primary mt-3">
                Focus
            </button>
        </div>
    )
}
