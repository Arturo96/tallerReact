import React, { memo } from 'react'

export const Small = memo(({value}) => {

    console.log('Componente llamado');

    return (
        <small>
            {value}
        </small>
    )
})
