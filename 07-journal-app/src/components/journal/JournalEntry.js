import React from "react";
import moment from 'moment';
import { setActiveNote } from "../../actions/notes";
import { useDispatch } from "react-redux";

export const JournalEntry = ({ note }) => {

	const dispatch = useDispatch();

	const noteDate = moment(note.date);

	const handleActiveNote = () => {
		dispatch(setActiveNote(note.id, note));
	}

	return (
		<div onClick={handleActiveNote} className="journal__entry animate__animated animate__fadeIn animate__faster">
			{note.url && (
				<div
					className="journal__entry-picture"
					style={{
						background: `url(${note.url}) center / cover`
					}}
				></div>
			)}

			<div className="journal__entry-body">
				<p className="journal__entry-title">{note.title}</p>
				<p className="journal__entry-content">{note.body}</p>
			</div>

			<div className="journal__entry-date">
				<span>{noteDate.format('dddd')}</span>
				<h4>{noteDate.format('Do')}</h4>
			</div>
		</div>
	);
};
