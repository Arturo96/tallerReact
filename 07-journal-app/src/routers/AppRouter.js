import React from 'react';
import { useEffect } from 'react';
import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';

import {firebase} from '../firebase/firebase-config';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { useState } from 'react';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false)
        })
       
    }, [dispatch, setChecking, setIsLoggedIn])

    if(checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    
                    <PublicRoute isLoggedIn={isLoggedIn} path="/auth" component={AuthRouter} />
                    <PrivateRoute isLoggedIn={isLoggedIn} exact path="/" component={JournalScreen} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
        
    )
}
