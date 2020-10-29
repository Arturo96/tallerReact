import { types } from "../types/types";

const initialState = {
	notes: [],
	active: null
};

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {

		case types.notesAdd:
			return {
				...state,
				notes: [...state.notes, action.payload]
			}

		case types.notesActive:
			return {
				...state,
				active: {
					...action.payload
				}
			};
		
		case types.notesLoad:
			return {
				...state,
				notes: action.payload
			}
		
		case types.notesUpdated:
			return {
				...state,
				notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note )
			}
		
		case types.notesDelete:
			return {
				notes: state.notes.filter(note => note.id !== action.payload),
				active: null
			}

		case types.notesLogoutCleaning:
			return initialState;

		default:
			return state;
	}
};
