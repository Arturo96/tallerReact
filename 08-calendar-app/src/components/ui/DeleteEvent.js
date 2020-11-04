import React from 'react'
import { useDispatch } from 'react-redux'
import { eventDeleted } from '../../actions/events';

export const DeleteEvent = () => {

    const dispatch = useDispatch();

    const handleDeleteEvent = () => {
        dispatch(eventDeleted());
    }

    return (
        <button onClick={handleDeleteEvent} className="btn btn-danger fab-danger">
            <i className="fas fa-trash"></i>
            <span> Borrar</span>
        </button>
    )
}
