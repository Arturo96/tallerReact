import React, { useEffect } from "react";
import { useForm } from "./useForm";
import "./form.css";

export const FormWithCustomHook = () => {
	const [formValues, handleInputChange, handleSubmit] = useForm({
        nombre: "",
        email: "",
		password: ""
	});

    const { nombre, email,  password } = formValues;
    
    useEffect(() => {
        console.log('El email cambió');
    }, [email])

	return (
		<div className="container mt-3">
			<h1 className="text-center">FormWithCustomHook</h1>
			<hr />

			<form onSubmit={handleSubmit} className="container">
				<div className="form-group">
					<div className="row justify-content-center align-items-center">
						<label htmlFor="nombre" className="col-md-2 pr-lg-0 col-form-label">
							Nombre:{" "}
						</label>
						<input
							id="nombre"
							type="text"
							name="nombre"
							className="form-control col-md-8"
							placeholder="Ingrese su nombre"
							autoComplete="off"
							value={nombre}
							onChange={handleInputChange}
						/>
					</div>
				</div>

                <div className="form-group">
					<div className="row justify-content-center align-items-center">
						<label htmlFor="email" className="col-md-2  pr-lg-0 col-form-label">
							Correo electrónico:{" "}
						</label>
						<input
							id="email"
							type="email"
							name="email"
							className="form-control col-md-8"
							placeholder="Ingrese su email"
							autoComplete="off"
							value={email}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="row justify-content-center align-items-center">
						<label htmlFor="password" className="col-md-2 pr-lg-0 col-form-label">
							Contraseña:{" "}
						</label>
						<input
							id="password"
							type="password"
							name="password"
							className="form-control col-md-8"
							placeholder="Ingrese su password"
							value={password}
							onChange={handleInputChange}
						/>
					</div>
				</div>

                <button className="btn btn-info" type="submit">Mandar info</button>
			</form>
		</div>
	);
};
