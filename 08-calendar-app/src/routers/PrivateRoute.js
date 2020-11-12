import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = (
    {isLoggedIn,
    component: Component,
    ...rest
}) => {
    return (
        isLoggedIn ?
        <Route {...rest} component={Component}  />
                   :
        <Redirect to="/login" />
    )
}

PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}