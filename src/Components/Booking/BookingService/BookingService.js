import React from 'react';
import { useParams } from 'react-router';

const BookingService = () => {
    const { serviceKey } = useParams();
    return (
        <div>
            <h1>This is booking:{serviceKey}</h1>


        </div>
    );
};

export default BookingService;