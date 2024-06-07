import React from 'react'
import '../../assets/styles/main.scss'
import MapComponent from './MapComponent';

function Footer() {
    return (
        <>
            <div class="info-footer">
                <div class="work-time">
                    <span class="title">
                        OPENING HOURS
                    </span>
                    <span>
                        SERVICE 24-HOURS 7 DAYS A WEEK
                    </span>
                    <span>
                        OFFICE: MONDAY-FRIDAY
                    </span>
                    <span>
                        8.00AM-10.00PM
                    </span>
                </div>
                <div class="address">
                    <span class="title">
                        ADDRESS
                    </span>
                    <span>
                        6600 W Rogers Circle Ste-14
                    </span>
                    <span>
                        Boca Raton, FL 33487
                    </span>
                    <span>
                        <a href='mailto:fdrvend@gmail.com'>fdrvend@gmail.com</a>
                    </span>
                    <span>
                        <a href="tel:561-997-8385">Tel: 561-997-8385</a>
                    </span>
                    <span>
                        <a href="tel:561-997-6123">Fax: 561-997-6123</a>
                    </span>
                </div>
                <div class="map-box">
                    <span class="title">
                        FIND US
                    </span>
                    <MapComponent />
                </div>

            </div>
            <div class="social-media-footer">

            </div>
            <div class="copyright">

            </div>
        </>
    )
}

export default Footer