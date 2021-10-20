import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const BookingService = () => {
    const { serviceKey } = useParams();
    const [bookings, setBooking] = useState([])
    useEffect(() => {

        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])


    const bookingInfo = bookings.filter(booking => booking.key === serviceKey)

    return (
        <div>
            <h1>This is booking:{serviceKey}</h1>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bookingInfo.image} />
                <Card.Body>
                    <Card.Title>{bookingInfo[0]?.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default BookingService;