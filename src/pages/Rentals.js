import React from 'react'
import '../assets/styles/main.scss';
import HeroForPages from '../components/Elements/HeroForPages';
import SectionImgRight from '../components/Elements/SectionImgRight';

import img_1 from '../assets/images/memorable-events.jpg'
import Footer from '../components/Elements/Footer';
import CallToAction from '../components/Elements/CallToAction';

function Rentals() {

    const section_1_title = 'Make Your Event Memorable with Our Rental Services';
    const section_1_txt = "At Federal Vending Service, we understand that every event is unique and requires special attention to detail. Our rental services are designed to transform your events into unforgettable experiences with a wide range of entertainment options. Whether you are hosting a corporate event, a private party, or a large public gathering, we have the perfect rental solutions to meet your needs.";
    const section_1_btnTxt = "Call Us";
    const section_1_navLink = "/contact";

    const banner_1_title = "Flexible Options";
    const banner_1_subtitle = "We offer flexible rental periods to accommodate events of any length, whether you need equipment for a few hours or several days.";
    const banner_1_btnText = "Call us";
    const banner_1_navLink = "/contact";
    return (
        <div className="rentals">
            <HeroForPages />
            <div className="section rentals--section-1">
                <SectionImgRight title={section_1_title} txt={section_1_txt} btnTxt={section_1_btnTxt} navLink={section_1_navLink} img={img_1} alt="federal-vending-rental-service" />
            </div>
            <div className="section rentals--section-2">
                <h2>
                    Our Rental Offerings
                </h2>
                <div className="equipment">
                    <h5>Jukeboxes</h5>
                    <p>Create an exciting atmosphere with our top-of-the-line jukeboxes. With a vast selection of music genres and an easy-to-use interface, our jukeboxes are sure to get your guests dancing and having a great time.</p>
                </div>
                <div className="equipment">
                    <h5>Arcade Games</h5>
                    <p>Bring the fun of the arcade to your event with our classic and modern arcade games. From pinball machines to racing simulators, our arcade game rentals provide entertainment for guests of all ages.</p>
                </div>
                <div className="equipment">
                    <h5>Pool Tables</h5>
                    <p>Add a touch of class and competition to your event with our professional-grade pool tables. Perfect for both casual play and serious tournaments, our pool tables are a great addition to any gathering.</p>
                </div>
                <div className="equipment">
                    <h5>Pinball Machines</h5>
                    <p>Give your guests a nostalgic experience with our pinball machine rentals. These timeless classics are always a hit and provide hours of entertainment.</p>
                </div>
                <div className="equipment">
                    <h5>Interactive Amusement Games</h5>
                    <p>Engage your guests with our interactive amusement games. From air hockey to basketball shooting games, our selection ensures that everyone will find something they enjoy.</p>
                </div>
                <div className="equipment">
                    <h5>Cigarette Machines</h5>
                    <p>For events that cater to adult audiences, our cigarette machines provide a convenient solution. These machines are maintained to the highest standards, ensuring reliable operation and easy access for your guests.</p>
                </div>
            </div>
            <div className="banner banner-1">
                <CallToAction title={banner_1_title} subtitle={banner_1_subtitle} btnTxt={banner_1_btnText} navLink={banner_1_navLink} />
            </div>
            <footer className='section section-footer'>
                <Footer />
            </footer>
        </div>
    )
}

export default Rentals