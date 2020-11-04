import React, {useState} from "react";
import { Navbar } from "../ui/Navbar";
import { messages } from "../../helpers/calendar-messages-es";

import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import 'moment/locale/es';
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import { eventClearActive, eventSetActive } from "../../actions/events";
import { AddEvent } from "../ui/AddEvent";
import { DeleteEvent } from "../ui/DeleteEvent";

moment.locale('es');

const localizer = momentLocalizer(moment);
   
export const CalendarScreen = () => {

    const {events} = useSelector(state => state.calendar)
    
    
    const {activeEvent}  = useSelector(state => state.calendar);
    const dispatch = useDispatch();

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e))
        
    }

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        dispatch(eventClearActive());
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367CF7',
            color: '#fafafa'
            
        }

        return {style}
    }

	return (
		<div className="calendar">
			<Navbar />

			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
                style={{ height: 500 }}
                messages={messages}
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                onSelectSlot={onSelectSlot}
                selectable={true}
                view={lastView}
                components={{
                    event: CalendarEvent 
                }}
			/>

            <CalendarModal />

            {activeEvent && <DeleteEvent />}
            <AddEvent />
		</div>
	);
};
