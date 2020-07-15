import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })

    const {x, y} = coords;

    useEffect(() => {

        const mouseMove = e => {
            setCoords({x: e.x, y: e.y})
        }
        
        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div className="container mt-3">
            <h3>Mi mensaje!!!</h3>
    <h3>X: {x}, Y: {y}</h3>
        </div>
    )
}
