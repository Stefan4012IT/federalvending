import React from 'react';
import '../assets/styles/main.scss';
import Navbar from '../components/Navbar/Navbar';
import ButtonLeft from '../components/Elements/ButtonLeft';
import ButtonRight from '../components/Elements/ButtonRight';
import SectionImgRight from '../components/Elements/SectionImgRight';
import SectionImgLeft from '../components/Elements/SectionImgLeft';
import SectionImgBottom from '../components/Elements/SectionImgBottom';
import CallToAction from '../components/Elements/CallToAction';
import SuperParticles from '../components/Elements/SuperParticles';

import logo from '../assets/images/federalVendingLogo.svg';
import img_1 from '../assets/images/header_virtuo-1.png';
import img_2 from '../assets/images/evoke-snack.png';
import img_3 from '../assets/images/arcade-vanding-games-1.jpg';
import img_4 from '../assets/images/billiard.jpg';
import Footer from '../components/Elements/Footer';







const Home = () => {

    const section_1_title = 'ENTERTAINMENT VENDING';
    const section_1_subtitle = ["Jukeboxes", "Pool Tables", "Arcade Games"];
    const section_1_btnTxt = "Find More";
    const section_1_navLink = "/entertainment-vending";

    const section_2_title = 'FOOD SERVICE';
    const section_2_subtitle = ["Vending Services", "Vending Markets", "Coffee"];
    const section_2_btnTxt = "Find More";
    const section_2_navLink = "/food-service";

    const section_3_title = 'Discover Excellence in Vending Services';
    const section_3_txt = 'We offer the freshest products, knowledgeable employees, and responsive service, ensuring long-term partnerships and customized solutions for your business needs.';
    const section_3_btnTxt = "About Us";
    const section_3_navLink = "/about-us";

    const section_4_title = 'Transform Your Event with Federal Vending Service!';
    const section_4_txt = 'Turn your next event from ordinary to extraordinary with Federal Vending Service. Whether it’s a party, corporate event, or any special occasion, we make it memorable and fun-filled. Call us today at <span class="red-span"><a href="tel:1-800-445-4778">1-800-445-4778</a></span> to book your event!';

    const banner_1_title = "24-HOURS 7 DAYS A WEEK";
    const banner_1_subtitle = "SERVICE";
    const banner_1_btnText = "Call us";
    const banner_1_navLink = "/contact";




    return (
        <>
            <div className='hero'>
                <Navbar />
                <SuperParticles className="hero--super-particles" />
                <div className="logo-box">
                    <img src={logo} className="logo-hero" alt="federal-vending-service-logo" />
                </div>
                <div className="sides">
                    <div className="hero-left-side"></div>
                    <div className="hero-right-side"></div>
                </div>
                <div className="hero-btn-box">
                    <ButtonLeft txt="About us" navLink="/about-us" />
                    <ButtonRight txt="Contact" navLink="/contact" />
                </div>
            </div>
            <div className="section section-1">
                <SectionImgRight title={section_1_title} subtitle={section_1_subtitle} btnTxt={section_1_btnTxt} navLink={section_1_navLink} img={img_1} alt="jukebox-vending-machine" />
            </div>
            <div className="section section-2">
                <SectionImgLeft title={section_2_title} subtitle={section_2_subtitle} btnTxt={section_2_btnTxt} navLink={section_2_navLink} img={img_2} alt="envoke-snack-vending-machine" />
            </div>

            <div className="section section-3">
                <SectionImgLeft title={section_3_title} txt={section_3_txt} btnTxt={section_3_btnTxt} navLink={section_3_navLink} img={img_3} alt="arcade-games-vending-machine" />
            </div>
            <div className="banner banner-1">
                <CallToAction title={banner_1_title} subtitle={banner_1_subtitle} btnTxt={banner_1_btnText} navLink={banner_1_navLink} />
            </div>
            <div className="section section-4">
                <SectionImgBottom title={section_4_title} txt={section_4_txt} img={img_4} alt="billiard-table-vending-machine" />
            </div>
            <footer className='section section-footer'>
                <Footer />
            </footer>
        </>
    );
};

export default Home;