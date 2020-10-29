import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {


    const dispatch = useDispatch(),
        d = document;

	const { active: note } = useSelector(state => state.notes);

	const handleSaveNote = () => {
			dispatch(startSaveNote(note));
        },
		handlePictureClick = () => {
            d.getElementById("fileSelector").click();
        },
        handleFileChange = ({target}) => {
            const [file] = target.files;
            if(file) dispatch(startUploading(file))
        };

	return (
		<div className="notes__appbar">
			<span>28 de Agosto 2020</span>

            <input id="fileSelector" type="file" name="" onChange={handleFileChange}
            style={{
                display: 'none'
            }} />

			<div className="botones">
				<button onClick={handlePictureClick} className="btn">
					Subir foto
				</button>
				<button onClick={handleSaveNote} className="btn">
					Save
				</button>
			</div>
		</div>
	);
};
