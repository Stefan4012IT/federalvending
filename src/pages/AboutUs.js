import React from 'react'
import '../assets/styles/main.scss';
import HeroForPages from '../components/Elements/HeroForPages';
import CallToAction from '../components/Elements/CallToAction';
import Footer from '../components/Elements/Footer';


function AboutUs() {

    const banner_1_title = "Ready to transform your vending experience?";
    const banner_1_subtitle = "Contact Federal Vending Service today";
    const banner_1_btnText = "Call us";
    const banner_1_navLink = "/contact";


    return (
        <div className="about-us">
            <HeroForPages />
            <div className="section about-us--section-1">
                <h2>
                    Who We Are
                </h2>
                <p>
                    Federal Vending Service, based in Boca Raton, has been a proud and reliable partner in the vending industry since 1960. As one of the standing members of The Music Operators of America Association (AMOA), we have steadily built a top-notch, well-respected vending business that continues to grow and adapt to the changing needs of our customers.
                </p>
            </div>
            <div className="section about-us--section-2">
                <h2>
                    Our Mission
                </h2>
                <p>
                    At Federal Vending Service, our mission is to provide quality service with a friendly smile. We aim to create long-term working relationships with our clients by offering customized vending solutions that meet their specific needs. Whether you are considering a new installation or looking to switch to a better service, we are here to help you every step of the way.
                </p>
            </div>
            <div className="section about-us--section-3">
                <h2>
                    Our Services
                </h2>
                <p>
                    We offer a wide range of vending services designed to keep your workforce energized and satisfied. Our offerings include:
                </p>
                <div className="equipment-box">
                    <div className="equipment">
                        <h5>Vending Machines</h5>
                        <p>Stocked with the freshest products, our vending machines offer a variety of snacks, beverages, and meals that cater to different tastes and dietary needs.</p>
                    </div>
                    <div className="equipment">
                        <h5>Entertainment Vending</h5>
                        <p>We provide a variety of amusement vending machines, including jukeboxes, arcade games, pool tables, and pinball machines, bringing fun and entertainment to your workplace or venue.</p>
                    </div>
                    <div className="equipment">
                        <h5>Micro-Markets</h5>
                        <p>For a more extensive selection, our micro-markets provide a self-service convenience store experience within your facility.</p>
                    </div>
                    <div className="equipment">
                        <h5>Coffee and Beverage Services</h5>
                        <p>Start your day off right with our high-quality coffee and tea options, ensuring your team stays energized and focused.</p>
                    </div>
                    <div className="equipment">
                        <h5>Customized Solutions</h5>
                        <p>We work closely with our clients to design vending programs that perfectly fit their environment, offering specific dietary options and featuring local products.</p>
                    </div>
                </div>
            </div>
            <div className="section about-us--section-4">
                <h2>
                    Why Choose Us?
                </h2>
                <p>
                    We offer a wide range of vending services designed to keep your workforce energized and satisfied. Our offerings include:
                </p>
                <div className="equipment">
                    <h5>Quality Products</h5>
                    <p>We ensure our machines are always stocked with fresh and high-quality items.</p>
                </div>
                <div className="equipment">
                    <h5>Responsive Service</h5>
                    <p>Our knowledgeable employees and responsive service ensure minimal downtime and maximum satisfaction.</p>
                </div>
                <div className="equipment">
                    <h5>Customer Satisfaction</h5>
                    <p>Our focus on building long-term relationships means we are dedicated to meeting and exceeding your expectations.</p>
                </div>
                <div className="equipment">
                    <h5>Experience</h5>
                    <p>With over 60 years in the industry, we have the expertise to provide reliable and innovative vending solutions.</p>
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

export default AboutUs