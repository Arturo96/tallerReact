import React, {useState} from "react";
import { Navbar } from "../ui/Navbar";
import { messages } from "../../helpers/calendar-messages-es";

import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import 'moment/locale/es';
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";

moment.locale('es');

const localizer = momentLocalizer(moment),
    events = [{
        title: 'Cumpleaños del jefe',
        start: moment().toDate(), // new Date()
        end: moment().add(2, 'hours').toDate(),
        notes: 'Comprar el pastel',
        user: {
            _id: '123',
            name: 'Arturo'
        }
    }];

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
    }

    const onSelectEvent = (e) => {
    }

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e);
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
                view={lastView}
                components={{
                    event: CalendarEvent 
                }}
			/>

            <CalendarModal />
		</div>
	);
};
