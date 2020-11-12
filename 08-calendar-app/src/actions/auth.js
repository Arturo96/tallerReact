import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import {types} from '../types/types';

export const startLogin = (email, password) => {
    return async(dispatch) => {

        const data = {email, password}

        const resp = await fetchSinToken('auth', data, 'POST'),
            body = await resp.json();

        if(body.ok) {

            const {uid, name, token} = body;

            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({uid, name}))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const startRegister = (name, email, password) => {
    return async(dispatch) => {

        const resp = await fetchSinToken('auth/new', {name, email, password}, 'POST'),
            body = await resp.json();

        if(resp.ok) {

            const {uid, name, token} = body;
            
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({uid, name}))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }


    }
}

export const startChecking = () => {
    return async(dispatch) => {
        const resp = await fetchConToken('auth/renew'),
            body = await resp.json();

        if(resp.ok) {

            const {uid, name, token} = body;
            
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({uid, name}))
        } else {
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

export const logout = () => ({type: types.authLogout})