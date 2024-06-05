import React from 'react'
import '../../assets/styles/main.scss'
import Subtitle from './Subtitle';
import ButtonLeft from './ButtonLeft';

function SectionImgRight({ title, subtitle, btnTxt, navLink, txt, img, alt, imgUrl }) {
    const backgroundStyle = imgUrl ? { backgroundImage: `url(${imgUrl})` } : {};

    return (
        <div className="section-img-right">
            <div className="section-img-right--left-side">
                <h2>{title}</h2>
                {!subtitle ? '' : <Subtitle txts={subtitle} />}
                {!txt ? '' : <p>{txt}</p>}
                {!btnTxt ? '' : <ButtonLeft txt={btnTxt} navLink={navLink} />}
            </div>
            <div className="section-img-right--right-side" style={backgroundStyle} aria-label={alt}>
                {!img ? '' : <img src={img} alt={alt} />}

            </div>

        </div >
    )
}

export default SectionImgRight