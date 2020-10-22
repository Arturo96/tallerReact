import React from 'react';
import {NotesAppBar} from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main">
            
            <NotesAppBar />

            <div className="notes__content">
                <input type="text" placeholder="Texto..."
                className="notes__input"
                autoComplete="off" />

                <textarea placeholder="Comentario..."
                className="notes__textarea"></textarea>

                {/* <div className="notes__img"> */}
                    <img className="notes__img" src="https://hablemosdevolcanes.com/wp-content/uploads/2018/10/nevado-del-ruiz-7.jpg" alt="Nevado del Ruiz"/>
                {/* </div> */}
            </div>
        </div>
    )
}
