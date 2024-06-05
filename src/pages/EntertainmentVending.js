import React from 'react'
import '../assets/styles/main.scss';
import HeroForPages from '../components/Elements/HeroForPages'
import SectionImgRight from '../components/Elements/SectionImgRight';
import SectionImgLeft from '../components/Elements/SectionImgLeft';
import EquipmentImgRight from '../components/Elements/EquipmentImgRight';
import SectionImgBottom from '../components/Elements/SectionImgBottom';
import Footer from '../components/Elements/Footer';

import img_1 from '../assets/images/playing-jukebox.jpg';
import img_2 from '../assets/images/billiard_ball.jpg';
import img_3 from '../assets/images/pinball-vending-machine.jpg';
import img_4 from '../assets/images/drive_arcade_game.jpg';




function EntertainmentVending() {

    const section_1_title = 'Music and Amusement Games';
    const section_1_text = "Federal Vending Service is a full-time coin-operated amusement business offering a variety of entertainment vending solutions. Our services include the provision and maintenance of jukeboxes, arcade video games, pool tables, pinball machines, and interactive amusement games. We take pride in delivering top-quality equipment that meets the diverse needs of our clients, ensuring that every venue we service is equipped with engaging and reliable entertainment options.";
    const section_1_btnTxt = "Call Us";
    const section_1_navLink = "/contact";

    const section_2_title = "PERSONALIZED SERVICE";
    const section_2_text = "The one thing you'll quickly find out about Federal Vending Service is that our service is personal. Federal Vending Service a Locally Owned and Operated , will always offer competitive video gaming equipment to your customers. Happy customers mean Good Business. Our staff will provide excellent, punctual, skilled and dealer authorized professional technical service and system support.";

    const equipment_title = "Diverse Range of Equipment";
    const equipment_set_1 = ["Jukeboxes", "Pool Tables", "Arcade Games", "Pinball Machines", "Interactive Games"];
    const equipmentTxt_set_1 = ["Bring the joy of music to any venue with our state-of-the-art jukeboxes.", "Perfect for bars, recreation centers, and other entertainment venues.", "From classic arcade machines to the latest interactive games, we have options that cater to all preferences.", "Enjoy the timeless fun of pinball with our well-maintained machines.", "Enhance engagement with a variety of interactive amusement games."]

    const section_4_title = "Tailored Solutions";
    const section_4_txt = "We understand that each venue has unique requirements. That’s why we offer customized solutions tailored to your specific needs. Whether you are looking for a single machine or a comprehensive setup, our team will work with you to design the perfect entertainment package.";

    return (
        <div className="entertainmentVending-page">
            <HeroForPages />
            <div className="section entertainment-vending-section-1">
                <SectionImgRight title={section_1_title} txt={section_1_text} btnTxt={section_1_btnTxt} navLink={section_1_navLink} imgUrl={img_1} alt="jukebox-vending-machine" />
            </div>
            <div className="section entertainment-vending-section-2">
                <SectionImgLeft title={section_2_title} txt={section_2_text} imgUrl={img_2} alt="billiard-ball-vending-machine" />
            </div>
            <div className="section entertainment-vending-section-3">
                <EquipmentImgRight title={equipment_title} equipment={equipment_set_1} equipmentTxt={equipmentTxt_set_1} imgUrl={img_3} alt="pinball-vending-machine" />
            </div>
            <div className="section entertainment-vending-section-4">
                <SectionImgBottom title={section_4_title} txt={section_4_txt} img={img_4} alt="drive-arcade-game" />
            </div>
            <footer className='section section-footer'>
                <Footer />
            </footer>
        </div>


    )
}

export default EntertainmentVending