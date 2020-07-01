import React, { useState } from "react";
import { AddMarca } from "./components/AddMarca";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
	const [marcas, setMarcas] = useState(["Simpson"]);

	const agregarMarca = (marca) => setMarcas([marca, ...marcas]);

	return (
		<>
			<h2>GifExpertApp</h2>
            <AddMarca agregarMarca={agregarMarca} />
			<hr />


			<ol>
				{marcas.map(marca => (
					<GifGrid 
					key={marca}
					category={marca} />
				))}
			</ol>
		</>
	);
};
