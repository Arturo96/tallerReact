import React from 'react';
import PropTypes from 'prop-types';


export const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <h4>{title}</h4>
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}