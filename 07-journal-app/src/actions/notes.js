import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const addNote = () => {
    return async (dispatch, getState) => {

        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
            
        }

        const doc = await db.collection(`journal/${uid}/notas`).add(newNote);

        newNote.id = doc.id;

        dispatch({
            type: types.notesAdd,
            payload: newNote
        })

        dispatch(setActiveNote(doc.id, newNote));

    }
}

export const setActiveNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotesLoad(notes));
    }
}

export const setNotesLoad = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {

        const {uid} = getState().auth;

        if(!note.url) delete note.url;

        const noteFirestore = {...note};
        
        delete noteFirestore.id;

       await db.doc(`journal/${uid}/notas/${note.id}`).update(noteFirestore);

       dispatch(refreshNote(note))

       Swal.fire('Nota guardada!!', note.title, 'success');
    }
}

export const refreshNote = (note) => ({
    type: types.notesUpdated,
    payload: note
    
})

export const startUploading = (file) => {
    return async(dispatch, getState) => {

        const activeNote = getState().notes.active;

        Swal.fire({
            title: 'Subiendo foto...',
            text: 'Espera...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })

        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl

        dispatch(startSaveNote(activeNote))

        Swal.close();
    }
}

export const startDeleteNote = note => {

    return async(dispatch, getState) => {

        Swal.fire({
            title: 'Borrando nota...',
            text: note.title,
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })

        const {uid} = getState().auth;

        await db.doc(`journal/${uid}/notas/${note.id}`).delete();

        dispatch(deleteNote(note.id));

        Swal.close();

        Swal.fire('Nota borrada.', '', 'success');

    }

}

export const deleteNote = id => ({
    type: types.notesDelete,
    payload: id
})

export const cleanNotes = () => ({
    type: types.notesLogoutCleaning
})