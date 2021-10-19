import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/appoinment">Book Appoinment</NavLink>
                <NavLink to="/contact">Contact</NavLink>


            </nav>

        </div>
    );
};

export default Header;