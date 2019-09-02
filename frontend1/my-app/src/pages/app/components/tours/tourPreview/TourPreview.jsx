import React from 'react';
import './TourPreview.css';

const TourPreview = ({ name, guide, numberOfPeople }) => {
    return (
        <div className='tourPreview'>
            <span>{name}</span>
            <span>{guide}</span>
            <span>{numberOfPeople}</span>
        </div>
    )
}

export default TourPreview;