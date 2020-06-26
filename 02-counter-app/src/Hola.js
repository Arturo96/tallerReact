import React from "react";
import PropTypes from 'prop-types';

const Hola = ({ saludo, subtitle }) => {
	return (
		<>
			<h1>Hola Mundo Component</h1>
    <h2>{saludo}</h2>
		</>
	);
};

Hola.propTypes = {
    saludo: PropTypes.string.isRequired
}

Hola.defaultProps = {
    subtitle: 'Random'
}

export default Hola;
