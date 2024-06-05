import React from 'react'
import '../../assets/styles/main.scss';
import Navbar from '../Navbar/Navbar'

import logo from '../../assets/images/logo-fv.svg';
import SuperParticles from './SuperParticles';

function HeroForPages() {
    return (
        <div className="hero-pages">
            <Navbar />
            <SuperParticles className="hero--super-particles" />
            <div className="logo-box">
                <img src={logo} alt="federal-vending-service-logo" class="logo-hero" />
            </div>
        </div>
    )
}

export default HeroForPages