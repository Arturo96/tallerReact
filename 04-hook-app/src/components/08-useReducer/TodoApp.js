import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import { useForm } from "../02-useEffect/useForm";

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	const [{description}, handleInputChange, , reset] = useForm({
		description: ''
	})

	
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])
    
    const handleSubmit = (e) => {
		e.preventDefault();
		
		if(description.trim().length <= 1) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false
		}

		const agregarTodoAction = {
			type: 'add',
			payload: newTodo
		}

		dispatch(agregarTodoAction);
		reset();


	}
	
	const handleDelete = (todoId) => {

		// crear la action

		const deleteTodoAction = {
			type: 'delete',
			payload: todoId
		}

		// dispatch
		dispatch(deleteTodoAction)
	}

	// const handleToggle = (todoId) => {
		

	// 	// crear la action

	// 	const toggleTodoAction = {
	// 		type: 'delete',
	// 		payload: todoId
	// 	}

	// 	// dispatch
	// 	dispatch(deleteTodoAction)
	// }

	return (
		<div className="container mt-3">
			<h1 className="text-center">TodoApp ({todos.length})</h1>
			<hr />

			<div className="row align-items-center">
				<div className="col-7">
					<ul className="list-group list-group-flush">
						{todos.map((todo, i) => (
							<li className="list-group-item tarea " key={todo.id}>
								<p className={todo.done ? "complete" : ""}>
									{i + 1} - {todo.desc}
								</p>
								<button onClick={() => handleDelete(todo.id)} className="btn btn-danger">Borrar</button>
							</li>
						))}
					</ul>
				</div>
				<div className="col-5">
					<h4 className="text-center">Agregar TODO</h4>
					<hr />

					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="description"
								placeholder="Aprender..."
								autoComplete="off"
								value={description}
								onChange={handleInputChange}
							/>
						</div>

						<button type="submit" className="btn btn-primary">Agregar</button>
					</form>
				</div>
			</div>
		</div>
	);
};
