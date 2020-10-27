import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => {
    return (
        !isLoggedIn ?
        <Route {...rest} component={Component} /> :
        <Redirect to="/" />
    )
}

PublicRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}