import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHooks = () => {
    const {state:counter, increment} = useCounter(1);
	const personaje = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { loading, data } = personaje;
    
    const {author, quote} = !!data && data[0];


	return (
		<div className="container mt-3">
			<h1>Breaking Bad Quotes</h1>
			<hr />

			{loading ? (
				<div className="alert alert-info text-center">Loading...</div>
			) : (
				<blockquote className="blockquote text-right">
					<p className="mb-0">{ quote }</p>
					<footer className="blockquote-footer"> {author}</footer>
				</blockquote>
			)}

            {/* <div className="d-flex justify-content-center"> */}
                <button onClick={() => increment(1)} className="btn btn-primary w-25 mx-auto btn-block">
                    Siguiente quote
                </button>
            {/* </div> */}
		</div>
	);
};
