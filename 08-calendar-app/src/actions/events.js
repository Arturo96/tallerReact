import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import { prepareEvents } from "../helpers/prepareEvents";
import Swal from "sweetalert2";

export const eventStartAddNew = event => {
	return async (dispatch, getState) => {
		const { uid, name } = getState().auth;

		try {
			const resp = await fetchConToken("events", event, "POST"),
				body = await resp.json();

			if (body.ok) {
				event.id = body.evento.id;
				event.user = {
					_id: uid,
					name
				};
				console.log(event);
				dispatch(eventAddNew(event));
			}
		} catch (error) {
			console.error(error);
		}
	};
};

const eventAddNew = event => ({
	type: types.eventAddNew,
	payload: event
});

export const eventSetActive = event => ({
	type: types.eventSetActive,
	payload: event
});

export const eventClearActive = () => ({ type: types.eventClearActive });

export const eventStartUpdate = (event) => {
    return async(dispatch, getState) => {

        const {activeEvent} = getState().calendar,
            eventID = activeEvent.id;

        try {
            const resp = await fetchConToken(`events/${eventID}`, event, 'PUT'),
                body = await resp.json();

            if(body.ok) {
                dispatch(eventUpdated(event));
            } else {
                Swal.fire('Error', body.msg, 'error')
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventUpdated = event => ({
	type: types.eventUpdated,
	payload: event
});

export const eventStartDelete = () => {
    return async(dispatch, getState) => {

        const {activeEvent} = getState().calendar,
            eventID = activeEvent.id;

        try {
            const resp = await fetchConToken(`events/${eventID}`, {}, 'DELETE'),
                body = await resp.json();

            if(body.ok) {
                dispatch(eventDeleted());
            } else {
                Swal.fire('Error', body.msg, 'error')
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventDeleted = () => ({
	type: types.eventDeleted
});

export const eventStartLoading = () => {
	return async (dispatch, getState) => {
		// const { uid } = getState().auth;

		try {
			const resp = await fetchConToken("events", {}),
				{ eventos } = await resp.json();

			if (resp.ok) {
				// let myEvents = eventos.filter(e => e.user._id === uid);
				
				dispatch(eventLoaded(prepareEvents(eventos)));
			}
		} catch (error) {
            console.error(error);
        }
	};
};

const eventLoaded = events => ({
	type: types.eventLoaded,
	payload: events
});

export const eventLogout = () => ({ type: types.eventLogout})
