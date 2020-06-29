import React, { useState } from "react";
import { AddMarca } from "./components/AddMarca";

export const GifExpertApp = () => {
	const [marcas, setMarcas] = useState(["Xiaomi", "Samsung", "Huawei"]);

	const agregarMarca = (marca) => setMarcas([...marcas, marca]);

	return (
		<>
			<h2>GifExpertApp</h2>
            <AddMarca agregarMarca={agregarMarca} />
			<hr />


			<ol>
				{marcas.map(marca => (
					<li key={marca}>{marca}</li>
				))}
			</ol>
		</>
	);
};
