import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/styles/main.scss';


const DesktopNav = () => {


    return (
        <div className="navbar">
            <div className="navbar-links">
                <NavLink to="/federalvending" className="nav-link"><span>Home</span></NavLink>
                <NavLink to="/entertainment-vending" className="nav-link"><span>Entertainment Vending</span></NavLink>
                <NavLink to="/food-service" className="nav-link"><span>Food Service</span></NavLink>
                <NavLink to="/about-us" className="nav-link"><span>About Us</span></NavLink>
                <NavLink to="/rentals" className="nav-link"><span>Rentals</span></NavLink>
                <NavLink to="/contact" className="nav-link"><span>Contact</span></NavLink>
            </div>
        </div>
    );
};

export default DesktopNav;