import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../assets/styles/main.scss'

function ButtonRight({ txt, navLink }) {
    return (
        <NavLink to={navLink}>
            <div className="button">
                <div className="btn-border-right"><span>{txt}</span></div>
            </div>
        </NavLink>

    )
}

export default ButtonRight