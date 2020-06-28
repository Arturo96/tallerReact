import React from "react";
import PropTypes from "prop-types";

const Hola = ({ saludo, subtitle }) => {
	return (
		<>
			<h1>{saludo}</h1>
			<p>{subtitle}</p>
		</>
	);
};

Hola.propTypes = {
	saludo: PropTypes.string.isRequired
};

Hola.defaultProps = {
	subtitle: "Random"
};

export default Hola;
