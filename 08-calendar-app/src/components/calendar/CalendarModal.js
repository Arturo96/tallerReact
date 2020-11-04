import React, { useEffect, useState } from "react";
import moment from "moment";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../actions/ui";
import { eventAddNew, eventClearActive, eventUpdated } from "../../actions/events";

export const CalendarModal = () => {
	const now = moment().minutes(0).seconds(0).add(1, "hours"),
		nowPlus1 = now.clone().add(1, "hours");

	const initEvent = {
		title: "",
		notes: "",
		start: now.toDate(),
		end: nowPlus1.toDate()
	};

	const [startDate, setStartDate] = useState(now.toDate());
	const [endDate, setEndDate] = useState(nowPlus1.toDate());
	const [titleValid, setTitleValid] = useState(true);

	const [formValues, setFormValues] = useState(initEvent);

	const { notes, title, start, end } = formValues;

	const dispatch = useDispatch();
	const { modalOpen } = useSelector(state => state.ui),
		{ activeEvent } = useSelector(state => state.calendar);

	useEffect(() => {
		if (activeEvent) setFormValues(activeEvent);
		else setFormValues(initEvent);
	}, [activeEvent, setFormValues]);

	const handleInputChange = ({ target }) => {
			setFormValues({
				...formValues,
				[target.name]: target.value
			});
		},
		handleSubmitForm = e => {
			e.preventDefault();

			const momentStart = moment(start);
			const momentEnd = moment(end);

			if (momentStart.isSameOrAfter(momentEnd)) {
				return Swal.fire("Error", "La fecha inicial debe ser inferior a la final.", "error");
			}

			if (title.trim().length < 2) return setTitleValid(false);

			// TODO: realizar grabación

			setTitleValid(true);
			if (activeEvent) {
				dispatch(eventUpdated(formValues))
			} else {
				dispatch(
					eventAddNew({
						...formValues,
						id: new Date().getTime(),
						user: {
							_id: "123",
							name: "Carlos Vargas"
						}
					})
				);
			}

			closeModal();
		};

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)"
		}
	};

	const closeModal = () => {
		// TODO: cerrar el modal

		dispatch(eventClearActive());
		dispatch(uiCloseModal());
		setFormValues(initEvent);
	};

	const handleStartDateChange = e => {
			setStartDate(e);
			setFormValues({
				...formValues,
				start: e
			});
		},
		handleEndDateChange = e => {
			setEndDate(e);
			setFormValues({
				...formValues,
				end: e
			});
		};

	Modal.setAppElement("#root");

	return (
		<Modal
			isOpen={modalOpen}
			onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={200}
			className="modal"
			overlayclassName="modal-fondo"
		>
			<h1> { activeEvent ? 'Editar evento' : 'Nuevo evento'  } </h1>
			<hr />
			<form className="container" onSubmit={handleSubmitForm}>
				<div className="form-group">
					<label>Fecha y hora inicio</label>
					<DateTimePicker
						onChange={handleStartDateChange}
						value={startDate}
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label>Fecha y hora fin</label>
					<DateTimePicker
						onChange={handleEndDateChange}
						value={endDate}
						className="form-control"
						minDate={new Date()}
					/>
				</div>

				<hr />
				<div className="form-group">
					<label>Titulo y notas</label>
					<input
						type="text"
						className={`form-control is-${titleValid ? "" : "in"}valid`}
						placeholder="Título del evento"
						name="title"
						autoComplete="off"
						value={title}
						onChange={handleInputChange}
					/>
					<small id="emailHelp" className="form-text text-muted">
						Una descripción corta
					</small>
				</div>

				<div className="form-group">
					<textarea
						type="text"
						className="form-control"
						placeholder="Notas"
						rows="2"
						name="notes"
						value={notes}
						onChange={handleInputChange}
					></textarea>
					<small id="emailHelp" className="form-text text-muted">
						Información adicional
					</small>
				</div>

				<button type="submit" className="btn btn-outline-primary btn-block">
					<i className="far fa-save"></i>
					<span> Guardar</span>
				</button>
			</form>
		</Modal>
	);
};
