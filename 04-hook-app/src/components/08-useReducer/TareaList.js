import React from "react";
import { TareaItem } from "./TareaItem";

export const TareaList = ({tareas, editarTarea, eliminarTarea}) => {
	return (
       
		<ul className="list-group">
			{tareas.map((tarea, i) => (
				<TareaItem tarea={tarea} i={i} editarTarea={editarTarea} eliminarTarea={eliminarTarea} />
			))}
		</ul>
	);
};
