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
                <div className="card">
                    <img src={img1} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Our Best Surgeons</h5>
                        <p className="card-text">We have the best surgeon in our medical and if you want these service try to contact with us you will get the excellent services from they are the best surgeons from every department.</p>

                    </div>
                </div>
                <div className="card">
                    <img src={img2} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Our Nurses</h5>
                        <p className="card-text">Without them our patient wont get proper treatment so we are gratefull from them.</p>

                    </div>
                </div>
                <div className="card">
                    <img src={img3} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Our Medical Staff</h5>
                        <p className="card-text">our medical staffs are also responsible for provind you a good treatment so we are also grateful for them.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;