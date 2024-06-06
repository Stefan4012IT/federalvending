import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/styles/main.scss';

const MobileNav = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(prevState => !prevState);
    };

    useEffect(() => {
        const heroPages = document.querySelector('.hero-pages');
        if (isNavVisible) {
            document.body.classList.add('no-scroll');
            if (heroPages) {
                heroPages.style.height = '100vh';
            }
        } else {
            document.body.classList.remove('no-scroll');
            if (heroPages) {
                heroPages.style.height = '30vh';
                heroPages.style.transition = '1s';
            }
        }
    }, [isNavVisible]);

    return (
        <>
            <div className="mobile-nav-box" onClick={toggleNav}>
                <div className="line-box">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                </div>
            </div>
            <div className={`mobile-nav ${isNavVisible ? 'visible' : 'hidden'}`}>
                <div className="mobile-nav-line-box" onClick={toggleNav}>
                    <div className="line-x1"></div>
                    <div className="line-x2"></div>
                </div>
                <div className="mobile-navbar-links-box">
                    <div className="mobile-navbar-links">
                        <NavLink to="/" className="nav-link"><span>Home</span></NavLink>
                        <NavLink to="/entertainment-vending" className="nav-link"><span>Entertainment Vending</span></NavLink>
                        <NavLink to="/food-service" className="nav-link"><span>Food Service</span></NavLink>
                        <NavLink to="/about-us" className="nav-link"><span>About Us</span></NavLink>
                        <NavLink to="/rentals" className="nav-link"><span>Rentals</span></NavLink>
                        <NavLink to="/contact" className="nav-link"><span>Contact</span></NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNav;