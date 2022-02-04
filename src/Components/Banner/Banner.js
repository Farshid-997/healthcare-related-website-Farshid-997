import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import img1 from './banner1.jpg';
import img2 from './banner2.jpg';
import img3 from './banner3.jpeg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner '>

            <Carousel>
                <Carousel.Item>

                    <Row>
                   <Col xs={12} md={8}>
                     <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />

                       </Col>

                       <Col className='banner-Text' xs={12} md={4}>
                       <h2 className='fw-bold'>
                               Dental health doctors listen
                            </h2>
                            <p>At Dental-health, we have built a healthcare system where you come first.
                                Because nothing is more important than your and your family’s health.</p>

                       </Col>


                    </Row>
                
                   
                </Carousel.Item>



                <Carousel.Item>

<Row>
<Col xs={12} md={8}>
 <img
    className="d-block w-100"
    src={img2}
    alt="First slide"
/>

   </Col>

   <Col className='banner-Text' xs={12} md={4}>
   <h2 className='fw-bold'>
            Dental health doctors listen
        </h2>
        <p>At Dental-health, we have built a healthcare system where you come first.
            Because nothing is more important than your and your family’s health.</p>

   </Col>


</Row>


</Carousel.Item>


<Carousel.Item>

<Row>
<Col xs={12} md={8}>
 <img
    className="d-block w-100"
    src={img3}
    alt="First slide"
/>

   </Col>

   <Col className='banner-Text' xs={12} md={4}>
   <h2 className='fw-bold'>
            Dental health doctors listen
        </h2>
        <p>At Dental-health, we have built a healthcare system where you come first.
            Because nothing is more important than your and your family’s health.</p>

   </Col>


</Row>


</Carousel.Item>


            </Carousel>




        </div>
    );
};

export default Banner;