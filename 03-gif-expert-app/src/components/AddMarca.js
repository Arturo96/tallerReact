import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddMarca = ({agregarMarca}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            agregarMarca(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
