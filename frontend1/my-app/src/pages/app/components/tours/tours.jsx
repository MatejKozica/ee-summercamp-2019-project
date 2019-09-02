import React from 'react';
import TourPreview from './tourPreview/TourPreview'

const Tours = ({ tours }) => {
    return map.tours(tour => {
        <TourPreview name={tour.name} guide={tour.guide} numberOfPeople={tour.numberOfPeople}></TourPreview>
    })
};

export default Tours;