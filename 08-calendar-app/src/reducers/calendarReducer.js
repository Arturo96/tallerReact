import { types } from "../types/types";

// {
// 	id: new Date().getTime(),
// 	title: "Cumpleaños del jefe",
// 	start: moment().toDate(), // new Date()
// 	end: moment().add(2, "hours").toDate(),
// 	notes: "Comprar el pastel",
// 	user: {
// 		_id: "123",
// 		name: "Arturo"
// 	}
// }

const initialState = {
	events: [],
	activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.eventAddNew:
			return {
				events: [...state.events, action.payload],
				activeEvent: action.payload
			};

		case types.eventSetActive:
			return {
				...state,
				activeEvent: action.payload
			};

		case types.eventClearActive:
			return {
				...state,
				activeEvent: null
			};

		case types.eventUpdated:
			return {
				...state,
				events: state.events.map(e => (e.id === action.payload.id ? action.payload : e))
			};

		case types.eventDeleted:
			return {
				events: state.events.filter(e => e.id !== state.activeEvent.id),
				activeEvent: null
			};

		case types.eventLoaded:
			return {
				...state,
				events: action.payload
			};

		case types.eventLogout:
			return initialState;

		default:
			return state;
	}
};
