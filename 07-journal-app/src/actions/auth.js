import Swal from 'sweetalert2';

import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import { types } from "../types/types";
import { cleanNotes } from './notes';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
	
	return (dispatch) => {
		dispatch(startLoading())
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(({user}) => dispatch(login(user.uid, user.displayName)) )
			.catch(err => {
				console.error(err);
				Swal.fire('Error', err.message, 'error');
			})
			.finally(() => dispatch(finishLoading()))
	}
}

export const registerEmailPwdName = (email, pwd, name) => {

	console.log(email, pwd);
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email, pwd)
			.then(async ({user}) => {
				
				await user.updateProfile({displayName: name});

				// Redirigir a la pagina
				/*
				const configuracion = {url: 'http://localhost:puerto'}
				*/

				// Enviar verificación por correo como bna practica

				//await user.sendEmailVerification(configuration).catch(....)

				dispatch(login(user.uid, user.displayName))

				
			}).catch(err => {
				console.error(err)
				Swal.fire('Error', err.message, 'error');
			} )
	}
}

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase.auth().signInWithPopup(googleAuthProvider)
			.then(({user}) => {
				dispatch(login(user.uid, user.displayName))
			})
	}
}

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName
	}
});

export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();

		dispatch(logout())
		dispatch(cleanNotes());
	}
}

export const logout = () => ({type: types.logout})
