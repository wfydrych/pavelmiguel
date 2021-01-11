import React from 'react'
import {NavLink} from 'react-router-dom'
import Media from 'react-media'
import './Menu.sass'
import ger from './img/ger.png'
import uk from './img/uk.png'
import esp from './img/esp.png'

const Menu = (props) => 
    (
    <React.Fragment>
        <nav>
            <Media query={{ maxWidth: 1000 }}>
            {matches =>
                matches ? (
                    <div className='mobileMenuBar'>
                        <span onClick={props.slideMenu}>Menü</span>
                        <div className='mobileMenuSlider'>
                            <NavLink to='/home' onClick={props.slideMenu}><li> {props.menu[0]}</li></NavLink>
                            <NavLink to='/werke' onClick={props.slideMenu}><li> {props.menu[1]}</li></NavLink>
                            <NavLink to='/vita' onClick={props.slideMenu}><li> {props.menu[2]}</li></NavLink>
                            <NavLink to='/aktuelles' onClick={props.slideMenu}><li> {props.menu[3]}</li></NavLink>
                            <NavLink to='/presse' onClick={props.slideMenu}><li> {props.menu[4]}</li></NavLink>
                            <NavLink to='/kontakt' onClick={props.slideMenu}><li> {props.menu[5]}</li></NavLink>
                        </div>
                        <div className='lang'>
                            <img className='lang__flag' onClick={props.handleClick} src={ger} alt='de'/>
                            <img className='lang__flag' onClick={props.handleClick} src={uk} alt='en'/>
                            <img className='lang__flag' onClick={props.handleClick} src={esp} alt='es'/>
                        </div>
                    </div>
                ) : (
                    <ul>
                        <NavLink to='/home'><li> {props.menu[0]}</li></NavLink>
                        <NavLink to='/werke'><li> {props.menu[1]}</li></NavLink>
                        <NavLink to='/vita'><li> {props.menu[2]}</li></NavLink>
                        <NavLink to='/aktuelles'><li> {props.menu[3]}</li></NavLink>
                        <NavLink to='/presse'><li> {props.menu[4]}</li></NavLink>
                        <NavLink to='/kontakt'><li> {props.menu[5]}</li></NavLink>
                        <div className='lang'>
                            <img className='lang__flag' onClick={props.handleClick} src={ger} alt='de'/>
                            <img className='lang__flag' onClick={props.handleClick} src={uk} alt='en'/>
                            <img className='lang__flag' onClick={props.handleClick} src={esp} alt='es'/>
                        </div>
                    </ul>
                )
            }
            </Media>
        </nav>
    </React.Fragment>
)

export default Menu