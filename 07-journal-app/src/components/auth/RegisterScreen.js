import React from "react";
import { Link } from "react-router-dom";
import {useForm} from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux'
import validator from 'validator';
import { removeError, setError } from "../../actions/ui";
import { registerEmailPwdName } from "../../actions/auth";

export const RegisterScreen = () => {

	const dispatch = useDispatch(),
		  {msgError} = useSelector(state => state.ui);
		  

	const [formValues, handleInputChange] = useForm({
		name: 'Arturo',
		email: 'caliche@gmail.com',
		password: '123456',
		confirmPassword: '123456'
	}),
	{name, email, password, confirmPassword} = formValues;

	const handleRegister = (e) => {
		e.preventDefault();

		if(isFormValid()) {
			console.log('Form hecho');
			dispatch(registerEmailPwdName(email, password, name));
		}
	}

	const isFormValid = () => {

		if(name.trim().length === 0) {
			dispatch(setError('El nombre es requerido'));
			return false;
		} 

		if(!validator.isEmail(email)) {
			dispatch(setError('El email ingresado no es válido.'));
			return false;
		}

		if(password !== confirmPassword) {
			dispatch(setError('Las contraseñas no coinciden.'));
			return false;
		}

		if(password.length < 5) {
			dispatch(setError('La contraseña debe tener al menos 5 caracteres.'));
			return false;
		}

		dispatch(removeError());
		return true;
	}

	return (
		<>
			<h3 className="auth__title">Registro</h3>

			<form onSubmit={handleRegister}>

				{msgError && 
					<div className="auth__error">
						{msgError}
					</div>
				}
				

				<input onChange={handleInputChange}
				value={name} className="auth__input" type="text" placeholder="Nombre..." name="name" />

				<input onChange={handleInputChange}
				value={email} className="auth__input" type="email" placeholder="Email..." name="email" />

				<input
					onChange={handleInputChange}
					value={password} className="auth__input"
					type="password"
					placeholder="Contraseña..."
					name="password"
				/>

                <input
					onChange={handleInputChange}
					value={confirmPassword} className="auth__input"
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
