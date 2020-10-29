import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { addNote } from '../../actions/notes';
import {JournalEntries} from './JournalEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const {name} = useSelector(state => state.auth)
       
    const handleLogout = () => {
       dispatch(startLogout());
    },
    handleAddNote = () => {
        dispatch(addNote());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-nav mt-4">
                <h3 className=""><i className="far fa-moon" /> {name}</h3>

                <button onClick={handleLogout} className="btn">Cerrar sesión</button>
            </div>

            <div onClick={handleAddNote} className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-3">Nueva nota</p>
            </div>

            
            <JournalEntries />
        </aside>
    )
}
