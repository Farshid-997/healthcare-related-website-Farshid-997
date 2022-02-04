import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer'



import Services from '../Services/Services';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
           
           

            <Footer></Footer>
        </div>
    );
};

export default Home;