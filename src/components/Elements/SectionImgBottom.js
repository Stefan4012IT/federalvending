import React from 'react'
import Subtitle from './Subtitle';

function SectionImgBottom({ title, subtitle, btnTxt, txt, img, alt, imgUrl }) {
  const backgroundStyle = imgUrl ? { backgroundImage: `url(${imgUrl})` } : {};

  return (
    <div className="section-img-bottom">
      <div className="section-img-bottom--top">
        <h2>{title}</h2>
        {!subtitle ? '' : <Subtitle txts={subtitle} />}
        {!txt ? '' : <p dangerouslySetInnerHTML={{ __html: txt }} />}
      </div>
      <div className="section-img-bottom--img" style={backgroundStyle} aria-label={alt}>
        {!img ? '' : <img src={img} alt={alt} />}
      </div>
    </div>
  )
}

export default SectionImgBottom