import React from 'react';
import { Button, Card, Ratio } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css'

const Cards = (props) => {
    const { key, name, image, description } = props.service
    return (
        <div>

            {/* <div className="service pb-5">
                <img src={image} alt="" />
                <h3>{name}</h3>

                <p className="px-3">{description}</p>
                <Link to={`/bookingservice/${key}`}>
                    <button className="btn btn-success"> {name.toLowerCase()}</button>
                </Link>
            </div> */}

<Card style={{ width: '18rem', borderRadius:'10px',boxShadow:'3px 3px 2px blue' }}>
    <Ratio aspectRatio="16x9">
    <Card.Img variant="top" src={image} />
    </Ratio>
 
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Link to={`/bookingservice/${key}`}>
    <Button variant="primary">Book Now</Button>
    </Link>
   
  </Card.Body>
</Card>

            
        </div>
    );
};

export default Cards;