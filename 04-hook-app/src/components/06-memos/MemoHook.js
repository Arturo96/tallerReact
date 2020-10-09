import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "./helpers/procesoPesado";

export const MemoHook = () => {
	const { state: counter, increment } = useCounter(1000);
	const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

	return (
		<div className="container mt-3">
			<h1 className="text-center">MemoHook</h1>

			<h3>
				Counter: <small>{counter} </small>
			</h3>
			<hr />

			<p>{memoProcesoPesado}</p>

			<button onClick={() => increment(1)} className="btn btn-primary mr-3">
				+1
			</button>

			<button onClick={() => setShow(!show)} className="btn btn-outline-primary">
				{" "}
				Show/Hide {JSON.stringify(show)}{" "}
			</button>
		</div>
	);
};
