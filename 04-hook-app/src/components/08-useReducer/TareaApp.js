import React, { useEffect, useReducer } from 'react'
import './styles.css';
import { tareaReducer } from './tareaReducer';
import {TareaList} from './TareaList';
import { TareaAdd } from './TareaAdd';

const init = () => JSON.parse(localStorage.getItem("tareas")) || [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TareaApp = () => {

    const [tareas, dispatch] = useReducer(tareaReducer, [], init);

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
        
    }, [tareas])

    const agregarTarea = (tarea) => {
        dispatch({
            type: 'add',
            payload: tarea
        });

       
    }

    const editarTarea = id => {
        dispatch({
            type: 'update',
            payload: id
        })
    }

    const eliminarTarea = (id) => {

        const eliminarAccion = {
            type: 'delete',
            payload: id
        }

        dispatch(eliminarAccion);
    }

    return (
        <div>
            <h1>TodoApp ({tareas.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TareaList tareas={tareas} editarTarea={editarTarea} eliminarTarea={eliminarTarea} />
                </div>
    
                <div className="col-5">
                    <TareaAdd agregarTarea={agregarTarea} />
                </div>
            </div>
        </div>
    )
}
