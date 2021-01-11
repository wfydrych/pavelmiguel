import React from 'react'
import './LeftBar.sass'
import {NavLink} from 'react-router-dom'
import werke from './img/werke.jpg'
import skulpturen from './img/skulptur.png'
import installationen from './img/installationen.jpg'

const LeftBar = (props) => 
    (
    <div className='leftbar'>
        <NavLink to='/offentliche'> 
            <div className='leftbar__picdiv'>
                <img alt='pic' src={werke} />
                <div className='leftbar__picdiv__txt'>Öffentliche Werke</div>
            </div>
        </NavLink>

        <NavLink to='/skulpturen'> 
            <div className='leftbar__picdiv'>
                <img alt='pic' src={skulpturen} />
                <div className='leftbar__picdiv__txt'>Skulpturen</div>
            </div>
        </NavLink>

        <NavLink to='/installationen'> 
            <div className='leftbar__picdiv'>
                <img alt='pic' src={installationen} />
                <div className='leftbar__picdiv__txt'>Installationen</div>
            </div>
        </NavLink>
    </div>
)

export default LeftBar