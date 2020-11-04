import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

export const AddEvent = () => {

    const dispatch = useDispatch();
    
    const handleAddEvent = () => {
        dispatch(uiOpenModal());
    } 

    return (
        <button onClick={handleAddEvent} className="btn btn-primary fab">
            <i className="fas fa-plus"></i>
        </button>
    )
}
