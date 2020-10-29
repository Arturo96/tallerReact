import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

export const LoginScreen = () => {

	const {loading} = useSelector(state => state.ui)

	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
			email: "caliche@gmail.com",
			password: "123456"
		}),
		{ email, password } = formValues;

	const handleLogin = e => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	};

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	return (
		<>
			<h3 className="auth__title">Login</h3>

			<form onSubmit={handleLogin}
			className="animate__animated animate__fadeIn animate__faster">
				<input
					className="auth__input"
					type="email"
					placeholder="Email..."
					name="email"
					onChange={handleInputChange}
					value={email}
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Contraseña..."
					name="password"
					onChange={handleInputChange}
					value={password}
				/>

				<button className="btn btn-primary btn-block" type="submit" disabled={loading} >
					Login
				</button>

				<div className="auth__social">
					<p>Login with social networks</p>

					<div onClick={handleGoogleLogin} className="google-btn">
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link className="link" to="/auth/register">
					Registrarse
				</Link>
			</form>
		</>
	);
};
