import React from 'react'
import './RightBar.sass'
import {NavLink} from 'react-router-dom'
import malerei from './img/malerei.jpg'
import zeichnungen from './img/zeichnung.jpg'
import performance from './img/performance.jpg'

const RightBar = (props) => 
    (
    <div className='rightbar'>
        <NavLink to='/malerei'>
            <div className='rightbar__picdiv'>
                <img loading="lazy" alt='pic' src={malerei} />
                <div className='rightbar__picdiv__txt'>Malerei</div>
            </div>
        </NavLink>

        <NavLink to='/zeichnungen'>
            <div className='rightbar__picdiv'>
                <img loading="lazy" alt='pic' src={zeichnungen} />
                <div className='rightbar__picdiv__txt'>Zeichnungen</div>
            </div>
        </NavLink>

        <NavLink to='/performance'>
            <div className='rightbar__picdiv'>
                <img loading="lazy" alt='pic' src={performance} />
                <div className='rightbar__picdiv__txt'>Performance</div>
            </div>
        </NavLink>
    </div>
)

export default RightBar