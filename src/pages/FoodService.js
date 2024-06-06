import React from 'react'
import HeroForPages from '../components/Elements/HeroForPages'
import SectionImgRight from '../components/Elements/SectionImgRight'
import EquipmentImgRight from '../components/Elements/EquipmentImgRight'
import SectionImgLeft from '../components/Elements/SectionImgLeft';

import img_1 from '../assets/images/snack-vending-machine.jpg';
import img_2 from '../assets/images/refreshing-drinks.jpg';
// import img_3 from '../assets/images/food-and-beverage-solutions.jpg';
import img_3 from '../assets/images/comprehensive-food-and-beverage-solutions-1.jpg';
import img_4 from '../assets/images/energize-your-workforce-with-vending-machines.jpg';
import SectionImgBottom from '../components/Elements/SectionImgBottom';
import Footer from '../components/Elements/Footer';


function FoodService() {
    const section_1_title = "Food, Snacks and Beverages";
    const section_1_text = "Our vending machines are stocked with a wide variety of snacks, beverages, and meals to cater to different tastes and dietary needs. We understand that a quick, nutritious snack can boost energy and productivity throughout the day. That's why we ensure our vending machines are always filled with fresh and healthy options."
    const section_1_btnTxt = "Call Us";
    const section_1_navLink = "/contact";

    const section_2_title = "Superior Food and Beverage Experience";
    const section_2_text = "At Federal Vending Service, we are dedicated to providing a superior food service experience through our top-notch vending solutions. Our focus is on delivering high-quality products, refreshing drinks, ensuring customer satisfaction, and maintaining long-term relationships with our clients."

    const equipment_title = "Comprehensive Food and Beverage Solutions";
    const equipment_set_1 = ["Micro-Markets", "Coffee and Beverage Services", "Customized Solutions", "Reliable and Responsive Service"];
    const equipmentTxt_set_1 = ["These markets are designed to provide employees with an easy access to a broader range of food and beverage options, promoting healthier eating habits and improving workplace morale.", "Our coffee service includes a variety of high-quality coffee and tea options, ensuring your team stays energized and focused. ", "We pride ourselves on offering customized vending solutions tailored to meet the specific needs of each client. Whether you require specific dietary options or want to feature local products, we work closely with you to design a vending program that perfectly fits your environment.", "Our team of dedicated professionals ensures that our vending machines are always operational and stocked."]

    const section_4_title = "Energize Your Workforce with Vending Machines";
    const section_4_text = "Vending machines are not just convenient; they are a source of energy and motivation for your workforce. By providing easy access to nutritious snacks and beverages, you help maintain high levels of productivity and employee satisfaction. Imagine the difference a quick, healthy snack can make during a long workday. Our vending solutions are designed to keep your team energized and ready to tackle any challenge."


    return (
        <>
            <HeroForPages />
            <div className="section food-service-section-1">
                <SectionImgRight title={section_1_title} txt={section_1_text} btnTxt={section_1_btnTxt} navLink={section_1_navLink} imgUrl={img_1} alt="snack-vending-machines" />
            </div>
            <div className="section food-service-section-2">
                <SectionImgLeft title={section_2_title} txt={section_2_text} imgUrl={img_2} alt="superior-food-and-beverage-experience" />
            </div>
            <div className="section food-service-section-3">
                <EquipmentImgRight title={equipment_title} equipment={equipment_set_1} equipmentTxt={equipmentTxt_set_1} imgUrl={img_3} alt="food-and-beverage-solution" />
            </div>
            <div className="section food-service-section-4">
                <SectionImgBottom title={section_4_title} txt={section_4_text} img={img_4} alt="energize-your-workforce-with-vending-machines" />
            </div>
            <footer className='section section-footer'>
                <Footer />
            </footer>
        </>
    )
}

export default FoodService