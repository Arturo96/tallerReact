import React from "react";

export const JournalEntry = () => {
	return (
		<div className="journal__entry">
			<div className="journal__entry-picture"></div>

			<div className="journal__entry-body">
				<p className="journal__entry-title">Un nuevo día</p>
				<p className="journal__entry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
			</div>

            <div className="journal__entry-date">
                <span>Lunes</span>
                <h4>28</h4>
            </div>
		</div>
	);
};
