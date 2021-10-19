
import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css';
const Header = () => {
    const { user } = useFirebase();
    return (
        <div className="header">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/appoinment">Book Appoinment</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
                {
                    user?.email && <Button variant="primary">LogOut</Button>

                }

            </nav>

        </div>
    );
};

export default Header;