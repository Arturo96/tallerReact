import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
	return (
		<>
			<h3 className="auth__title">Registro</h3>

			<form>
				<input className="auth__input" type="text" placeholder="Nombre..." name="nombre" />
				<input className="auth__input" type="email" placeholder="Email..." name="email" />
				<input
					className="auth__input"
					type="password"
					placeholder="Contraseña..."
					name="password"
				/>
                <input
					className="auth__input"
					type="password"
					placeholder="Confirmar contraseña..."
					name="confirmPassword"
				/>

				<button className="btn btn-primary btn-block" type="submit">
					Registrarse
				</button>

				<Link className="link mt-4" to="/auth/login">
					Registrado??
				</Link>
			</form>
		</>
	);
};
