import React from 'react';
import img1 from './Images/successful-medical-team.jpg'
import img2 from './Images/healthcare-workers-prevent-virus-insurance-medicine-concept-supportive-professional-female-nurse-doctor-blue-scrubs-stethoscope-show-thumbs-up-approval-smiling.jpg'
import img3 from './Images/R.jpg'
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className="about">
            <h2 className="text-dark mt-5  mb-10">About Us</h2>

            <div className="card-group ">
                <div class="card">
                    <img src={img1} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Our Best Surgeons</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    </div>
                </div>
                <div className="card">
                    <img src={img2} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Our Nurses</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>

                    </div>
                </div>
                <div className="card">
                    <img src={img3} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Our Medical Staff</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;