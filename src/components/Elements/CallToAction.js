import React from 'react'
import '../../assets/styles/main.scss'
import ButtonLeft from './ButtonLeft'

function CallToAction({title, subtitle, btnTxt, navLink}) {
    return (
        <div class="banner-box-1">
            <h5>{subtitle}</h5>
            <h2>{title}</h2>
            {!btnTxt ? '' : <ButtonLeft txt={btnTxt} navLink={navLink}/> }
        </div>
    )
}

export default CallToAction
