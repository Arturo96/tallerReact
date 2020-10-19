import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import queryString from "query-string";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useMemo } from "react";

export const SearchScreen = ({ history }) => {
	const location = useLocation(),
		{ q = "" } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm({
			hero: q
        });
        
	const { hero } = formValues;

	const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]);

	const handleSearch = e => {
		e.preventDefault();

		history.push(`?q=${hero}`);

	};

	return (
		<div>
			<h1>Search Screen</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<hr />

					<form onSubmit={handleSearch}>
						<input
							onChange={handleInputChange}
							type="search"
							placeholder="Busca tu heroe..."
							className="form-control"
							name="hero"
							value={hero}
						/>

						<button type="submit" className="btn m-1 btn-block btn-outline-primary">
							Search
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Resultados</h4>
					<hr />

					{heroesFiltrados.length > 0 ? (
						heroesFiltrados.map(h => <HeroCard key={h.id} {...h} />)
					) : (
						<h5 className="text-center">Sin resultados</h5>
					)}
				</div>
			</div>
		</div>
	);
};
