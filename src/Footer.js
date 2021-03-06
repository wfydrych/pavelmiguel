import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import './Footer.sass'

const Footer = (props) => 
    (
    <Fragment>
        <footer>
            <div className='footer'>Atelier Pavel Miguel, Georgstr.17, 76327 Pfinztal</div>
            <div className='footer'>0174 817 99 98</div>
            <div className='footer'>pavelmiguel@yahoo.de</div>
            <NavLink to='/impressum' className='footer'>Impressum</NavLink>
        </footer>
        <div className='author'>Coded by <a target="_blank" href="http://wojciechfydrych.com/">Wojciech Fydrych</a>, Copyright 2021</div>
    </Fragment>
)

export default Footer