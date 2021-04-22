import React from 'react'
import './LeftBar.sass'
import {NavLink} from 'react-router-dom'
import Context from './Context'
import werke from './img/werke.jpg'
import skulpturen from './img/MSA_27821.jpg'
import installationen from './img/installationen.jpg'

const LeftBar = (props) => 
    (
    <Context.Consumer>
    { (context) => (
        <div className='leftbar'>
            <NavLink to='/offentliche'> 
                <div className='leftbar__picdiv'>
                    <img loading="lazy" alt='pic' src={werke} />
                    <div className='leftbar__picdiv__txt'>{context.gallery[0]}</div>
                </div>
            </NavLink>

            <NavLink to='/skulpturen'> 
                <div className='leftbar__picdiv'>
                    <img loading="lazy" alt='pic' src={skulpturen} />
                    <div className='leftbar__picdiv__txt'>{context.gallery[1]}</div>
                </div>
            </NavLink>

            <NavLink to='/installationen'> 
                <div className='leftbar__picdiv'>
                    <img loading="lazy" alt='pic' src={installationen} />
                    <div className='leftbar__picdiv__txt'>{context.gallery[2]}</div>
                </div>
            </NavLink>
        </div>
    )}
    </Context.Consumer>
)

export default LeftBar