import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        nombre: '',
        email: ''
    })

    const {nombre, email} = formState;

    useEffect(() => {
        console.log('Form cargado');
    }, []);

    useEffect(() => {
        console.log('formState modificado');
    }, [formState]);

    useEffect(() => {
        console.log('Nombre modificado');
    }, [nombre]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">useEffect</h1>
            <hr />

            <form action="">
                <div className="form-group">
                    <div className="row">
                        <label htmlFor="nombre" className="col-md-1 offset-md-2 align-self-center">Nombre: </label>
                        <input id="nombre" type="text" name="nombre" className="form-control col-md-6" placeholder="Ingrese su nombre"
                        autoComplete="off"
                        value={nombre}
                        onChange={handleInputChange} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label htmlFor="email" className="col-md-1 offset-md-2 align-self-center">Email: </label>
                        <input id="email" type="text" name="email" className="form-control col-md-6" placeholder="Ingrese su email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange} />
                    </div>
                </div>
            </form>

            {nombre && <Message />}
        </div>
    )
}
