import React, {Fragment} from 'react'
import './Kontakt.sass'
import contactpic from './img/contact.jpg'

const Kontakt = (props) => 
    (
    <Fragment>
        <div className='contact'>
            <div className='contact__info'>
                <span className='contact__info__data'>Kontakt</span>
                <span className='contact__info__data'>Atelier Pavel Miguel</span>
                <span className='contact__info__data'>Georgstr.17</span>
                <span className='contact__info__data'>76327 Pfinztal</span>
                <span className='contact__info__data'>0174 8179 998</span>
                <span className='contact__info__data'>pavelmiguel@yahoo.de</span>
            </div>
            <img className='contact__img' src={contactpic} alt='contact'/>
        </div>
    </Fragment>
)

export default Kontakt