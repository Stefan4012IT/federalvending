import React from 'react'
import '../../assets/styles/main.scss'
import Subtitle from './Subtitle';
import ButtonLeft from './ButtonLeft';

function SectionImgLeft({ title, subtitle, btnTxt, navLink, txt, img, alt, imgUrl }) {
    const backgroundStyle = imgUrl ? { backgroundImage: `url(${imgUrl})` } : {};


    return (
        <div className="section-img-left">
            <div className="section-img-left--left-side" style={backgroundStyle} aria-label={alt}>
                {!img ? '' : <img src={img} alt={alt} />}
            </div>
            <div className="section-img-left--right-side">
                <h2>{title}</h2>
                {!subtitle ? '' : <Subtitle txts={subtitle} />}
                {!txt ? '' : <p>{txt}</p>}
                {!btnTxt ? '' : <ButtonLeft txt={btnTxt} navLink={navLink} />}
            </div>

        </div>
    )
}

export default SectionImgLeft