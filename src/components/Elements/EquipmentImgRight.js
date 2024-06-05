import React from 'react'
import '../../assets/styles/main.scss'

function EquipmentImgRight({ title, equipment, equipmentTxt, img, alt, imgUrl }) {
    const backgroundStyle = imgUrl ? { backgroundImage: `url(${imgUrl})` } : {};

    return (
        <div className="equipment-img-right">
            <div className="equipment-img-right--left-side">
                <h2>{title}</h2>
                {equipment && equipment.map((equipmentItem, index) => (
                    <div key={index} className="equipment">
                        <h5>{equipmentItem}</h5>
                        <p>{equipmentTxt[index]}</p>
                    </div>
                ))}
            </div>
            <div className="equipment-img-right--right-side" style={backgroundStyle} aria-label={alt}>
                {!img ? '' : <img src={img} alt={alt} />}

            </div>

        </div >
    )
}

export default EquipmentImgRight