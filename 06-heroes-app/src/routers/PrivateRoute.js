import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isLogged,
    component: Component,
    ...rest
}) => {

    console.log(rest.location.pathname);
    if(isLogged) localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route {...rest}
            component={(props) => (
                (isLogged)
                ? <Component {...props} />
                : (<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}