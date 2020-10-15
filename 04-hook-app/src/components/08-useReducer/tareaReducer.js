export const tareaReducer = (state = [], action) => {
	switch (action.type) {
		case "add":
			return [...state, action.payload];

		case "update":
            return state.map(t => 
                t.id === action.payload 
                    ? { ...t, done: !t.done } 
                    : t
                );

		case "delete":
			return state.filter(s => s.id !== action.payload);

		default:
			return state;
	}
};
