import React from 'react';
import './DayCard.css';

const DayCard = ({ date, children }) => {
    return (
        <div className='dayCard'>
            <h1 className='dayCard__date'>{date}</h1>
            <div className='dayCard__container'>
                {children}
                <div className='dayCard__addNewTour'>+</div>
            </div>
        </div>
    )
}

export default DayCard;