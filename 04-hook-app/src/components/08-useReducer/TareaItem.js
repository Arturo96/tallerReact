import React from "react";

export const TareaItem = ({tarea, i, editarTarea, eliminarTarea}) => {
	return (
		<li className="list-group-item" key={tarea.id}>
			<p onClick={() => editarTarea(tarea.id)} className={tarea.done ? "complete" : ""}>
				{i + 1}. {tarea.desc}
			</p>
			<button onClick={() => eliminarTarea(tarea.id)} className="btn btn-danger">
				Borrar
			</button>
		</li>
	);
};
