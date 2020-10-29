import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAjpQndD_TOhzeUbtopbtIiB-rMBlZWN-k",
	authDomain: "react-apps-d75c1.firebaseapp.com",
	databaseURL: "https://react-apps-d75c1.firebaseio.com",
	projectId: "react-apps-d75c1",
	storageBucket: "react-apps-d75c1.appspot.com",
	messagingSenderId: "295713814364",
	appId: "1:295713814364:web:fff82cd54186f90191b399"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(),
	googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
