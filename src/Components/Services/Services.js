import React, { useEffect, useState } from 'react';
import Cards from '../Card/Cards';
import './service.css'
const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))


    }, [])


    return (
        <div >
            <h2 className="text-primary mt-5">This is Our Services</h2>
            <div className="service-container">
                {
                    services.map(service => <Cards

                        key={service.key}
                        service={service}
                    >

                    </Cards>)
                }
            </div>

        </div>
    );
};

export default Services;