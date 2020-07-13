import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddMarca = ({agregarMarca}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    } 
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Se llamó el handle Submit', inputValue);
        if(inputValue.trim().length > 2) {
            agregarMarca(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input type="text" 
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
    )
}

AddMarca.propTypes = {
    agregarMarca: PropTypes.func.isRequired
}
