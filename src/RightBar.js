import React from 'react'
import './RightBar.sass'
import {NavLink} from 'react-router-dom'
import Context from './Context'
import malerei from './img/malerei.jpg'
import zeichnungen from './img/zeichnung.jpg'
import performance from './img/performance.jpg'

const RightBar = (props) => 
    (
    <Context.Consumer>
    { (context) => (
        <div className='rightbar'>
            <NavLink to='/malerei'>
                <div className='rightbar__picdiv'>
                    <img loading="lazy" alt='pic' src={malerei} />
                    <div className='rightbar__picdiv__txt'>{context.gallery[3]}</div>
                </div>
            </NavLink>

            <NavLink to='/zeichnungen'>
                <div className='rightbar__picdiv'>
                    <img loading="lazy" alt='pic' src={zeichnungen} />
                    <div className='rightbar__picdiv__txt'>{context.gallery[4]}</div>
                </div>
            </NavLink>

            <NavLink to='/performance'>
                <div className='rightbar__picdiv'>
                    <img loading="lazy" alt='pic' src={performance} />
                    <div className='rightbar__picdiv__txt'>{context.gallery[5]}</div>
                </div>
            </NavLink>
        </div>
    )}
    </Context.Consumer>
)

export default RightBar