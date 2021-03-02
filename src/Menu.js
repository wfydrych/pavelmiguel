import React from 'react'
import {NavLink} from 'react-router-dom'
import Media from 'react-media'
import Context from './Context'
import './Menu.sass'
import ger from './img/ger.png'
import uk from './img/uk.png'
import esp from './img/esp.png'

const Menu = (props) => 
    (
    <React.Fragment>
        <Context.Consumer>
        { (context) => (
            <nav>
                <Media query={{ maxWidth: 1000 }}>
                {matches =>
                    matches ? (
                        <div className='mobileMenuBar'>
                            <span onClick={props.slideMenu}>{context.menu[0]}</span>
                            <div className='mobileMenuSlider'>
                                <NavLink to='/home' onClick={props.slideMenu}><li> {context.menu[1]}</li></NavLink>
                                <NavLink to='/werke' onClick={props.slideMenu}><li> {context.menu[2]}</li></NavLink>
                                <NavLink to='/vita' onClick={props.slideMenu}><li> {context.menu[3]}</li></NavLink>
                                <NavLink to='/aktuelles' onClick={props.slideMenu}><li> {context.menu[4]}</li></NavLink>
                                <NavLink to='/presse' onClick={props.slideMenu}><li> {context.menu[5]}</li></NavLink>
                                <NavLink to='/kontakt' onClick={props.slideMenu}><li> {context.menu[6]}</li></NavLink>
                            </div>
                            <div className='lang'>
                                <img loading="lazy" className='lang__flag' onClick={ () => context.changeLang('de')} src={ger} alt='de'/>
                                <img loading="lazy" className='lang__flag' onClick={ () => context.changeLang('en')} src={uk} alt='en'/>
                                <img loading="lazy" className='lang__flag' onClick={ () => context.changeLang('es')} src={esp} alt='es'/>
                            </div>
                        </div>
                    ) : (
                        <ul>
                            <NavLink to='/home'><li> {context.menu[1]}</li></NavLink>
                            <NavLink to='/werke'><li> {context.menu[2]}</li></NavLink>
                            <NavLink to='/vita'><li> {context.menu[3]}</li></NavLink>
                            <NavLink to='/aktuelles'><li> {context.menu[4]}</li></NavLink>
                            <NavLink to='/presse'><li> {context.menu[5]}</li></NavLink>
                            <NavLink to='/kontakt'><li> {context.menu[6]}</li></NavLink>
                            <div className='lang'>
                                <img loading="lazy" className='lang__flag' onClick={ () => context.changeLang('de')} src={ger} alt='de'/>
                                <img loading="lazy" className='lang__flag' onClick={ () => context.changeLang('en')} src={uk} alt='en'/>
                                <img loading="lazy" className='lang__flag' onClick={ () => context.changeLang('es')} src={esp} alt='es'/>
                            </div>
                        </ul>
                    )
                }
                </Media>
            </nav>
        )}
        </Context.Consumer>
    </React.Fragment>
)

export default Menu