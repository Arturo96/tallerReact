import React, { useRef, useLayoutEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const Layout = () => {
	const { state: counter, increment } = useCounter(1);
	const personaje = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	const { data } = personaje;

    const { quote } = !!data && data[0];
    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({});
    
    useLayoutEffect(() => {
        // let width = pRef.current.getBoundingClientRect().width;
        // width != 0 && console.log(width);

        setBoxSize(pRef.current.getBoundingClientRect());
    }, [quote])

	return (
		<div className="container mt-3">
			<h1>LayoutEffect</h1>
			<hr />

			<blockquote className="blockquote d-flex">
				<p ref={pRef} className="mb-0">{quote}</p>
				
			</blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

			<button onClick={() => increment(1)} className="btn btn-primary w-auto mx-auto btn-block">
				Siguiente quote
			</button>
		</div>
	);
};
