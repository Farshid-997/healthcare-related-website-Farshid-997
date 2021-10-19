import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Cards = (props) => {
    const { name, image, description } = props.service
    return (
        <div>

            <div className="service pb-5">
                <img src={image} alt="" />
                <h3>{name}</h3>

                <p className="px-3">{description}</p>
                <Link to="">
                    <button className="btn btn-success"> {name.toLowerCase()}</button>
                </Link>
            </div>
        </div>
    );
};

export default Cards;