import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import {useForm} from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    // Form Login
    const [formLoginValues, setFormLogin] = useForm({
        lEmail: 'carlos13@gmail.com',
        lPassword: '123456'
    }),
    {lEmail, lPassword} = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLogin(lEmail, lPassword));
        
    }

    // Form Register

    const [formRegisterValues, setFormRegister] = useForm({
        rName: '',
        rEmail:  '',
        rPassword: '',
        rPassword2: ''
    }),
    {rName, rEmail, rPassword, rPassword2} = formRegisterValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if(rPassword !== rPassword2) {
            Swal.fire('Error', 'Las contraseñas no coinciden', 'error');

            return;
        }

       dispatch(startRegister(rName, rEmail, rPassword));
    }
    
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin} >
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={setFormLogin}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={setFormLogin}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div onSubmit={handleRegister} className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName"
                                value={rName}
                                onChange={setFormRegister}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={rEmail}
                                onChange={setFormRegister}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="rPassword"
                                value={rPassword}
                                onChange={setFormRegister}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="rPassword2"
                                value={rPassword2}
                                onChange={setFormRegister}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}