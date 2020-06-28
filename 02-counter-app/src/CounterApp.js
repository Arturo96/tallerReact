import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value);

    const incrementar = (e) => setCounter(counter + 1);
    const resetear = (e) => setCounter(value);
    const decrementar = (e) => setCounter(counter - 1);
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <div>
                <button onClick={incrementar} >+1</button>
                <button onClick={resetear} >Reset</button>
                <button onClick={decrementar} >-1</button>
            </div>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
