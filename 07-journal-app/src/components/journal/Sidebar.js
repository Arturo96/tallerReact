import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import {JournalEntries} from './JournalEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();
       
    const handleLogout = () => {
       dispatch(startLogout());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-nav mt-4">
                <h3 className=""><i className="far fa-moon" /> Carlos Vargas</h3>

                <button onClick={handleLogout} className="btn">Cerrar sesión</button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-3">New Entry</p>
            </div>

            
            <JournalEntries />
        </aside>
    )
}
