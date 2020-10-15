import React from "react";
import { useForm } from "../02-useEffect/useForm";

export const TareaAdd = ({agregarTarea}) => {
    
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const recibirForm = e => {
        e.preventDefault();

        if(!description.trim()) {
            alert("Por favor, llena el campo correspondiente.")
            return false;
        } 

        const nuevaTarea = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        agregarTarea(nuevaTarea);

        reset();

    }

	return (
		<>
			<h4 className="text-center">Agregar Tarea</h4>
			<hr />

			<form onSubmit={recibirForm} action="">
				<input
					type="text"
					name="description"
					onChange={handleInputChange}
					value={description}
					className="form-control"
					placeholder="Aprender..."
					autoComplete="off"
				/>
				<button type="submit" className="btn btn-outline-primary btn-block mt-2">
					Agregar
				</button>
			</form>
		</>
	);
};
