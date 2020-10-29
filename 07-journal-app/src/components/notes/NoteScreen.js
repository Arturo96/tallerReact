import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotesAppBar } from "./NotesAppBar";
import { useForm } from "../../hooks/useForm";
import { useEffect, useRef } from "react";
import { setActiveNote, startDeleteNote } from "../../actions/notes";

export const NoteScreen = () => {

    const dispatch = useDispatch();

	const { active: note } = useSelector(state => state.notes);

	const [formValues, handleInputChange, reset] = useForm(note),
		{ body, title, url } = formValues,
		activeId = useRef(note.id);
	
	const handleDeleteNote = () => {
		dispatch(startDeleteNote(note));
	}

	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
    }, [note, reset]);
    
    useEffect(() => {
        dispatch(setActiveNote(formValues.id, {...formValues}));
    }, [formValues, dispatch])

	return (
		<div className="notes__main">
			<NotesAppBar />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Texto..."
					className="notes__input"
					autoComplete="off"
					name="title"
					onChange={handleInputChange}
					value={title}
				/>

				<textarea
					placeholder="Comentario..."
					className="notes__textarea"
					onChange={handleInputChange}
					value={body}
					name="body"
				/>

				{url && (
					// <img className="notes__img" src="https://hablemosdevolcanes.com/wp-content/uploads/2018/10/nevado-del-ruiz-7.jpg" alt="Nevado del Ruiz"/>
					<img className="notes__img" src={url} alt={title} />
				)}
			</div>

			<button onClick={handleDeleteNote} className="notes__delete btn btn-danger">Eliminar nota</button>

		</div>
	);
};
