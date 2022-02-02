
import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm p-3">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
              
                <NavLink to="/appoinment">Book Appoinment</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/register">Register</NavLink>
               
                {user.email && <span style={{ color: 'orange', fontWeight: 'bold' }}>Hello!!{user.displayName}</span>}
                {
                    user?.email && <Button onClick={logOut} variant="primary">LogOut</Button>

                }

            </nav>

        </div>
    );
};

export default Header;