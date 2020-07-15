import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState);

    const increment = (factor) => setState(state + factor);

    const reset = () => setState(initialState);

    const decrement = (factor) => setState(state - factor);
    
    return {
        state,
        increment,
        reset,
        decrement
    };
}
