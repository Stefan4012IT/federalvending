import React from 'react';
import '../assets/styles/main.scss';
import HeroForPages from '../components/Elements/HeroForPages';
import MapComponent from '../components/Elements/MapComponent';
import Footer from '../components/Elements/Footer';

function Contact() {
    return (
        <div className="contact">
            <HeroForPages />
            <div className="section contact--section-1">
                <h2>Get in Touch</h2>
            </div>
            <div className="section contact--section-2">
                <div className="contact-box">
                    <div className="contact-box-1">
                        <h3>Phone</h3>
                        <span className="red-span">
                            1-800-445-4778
                        </span>
                        <p>Our customer service team is available to take your call and provide you with the assistance you need.</p>
                    </div>
                    <div className="contact-box-2">
                        <h3>Email</h3>
                        <span className="red-span">
                            fdrvend@gmail.com
                        </span>
                        <p>Feel free to send us an email with your inquiries, and we will get back to you as soon as possible.</p>
                    </div>
                    <div className="contact-box-3">
                        <h3>Address</h3>
                        <span className="red-span">
                            6600 W Rogers Circle Ste-14<br />
                            Boca Raton, FL
                        </span>
                    </div>
                </div>
            </div>
            <div className="section contact--section-map">
                <MapComponent />
            </div>
            <footer className='section section-footer'>
                <Footer />
            </footer>
        </div>
    )
}

export default Contact