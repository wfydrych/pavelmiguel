import React, {Fragment} from 'react'
import './Presse.sass'
import pressepic from './img/pressepic.jpg'

const Presse = (props) => 
    (
    <Fragment>
        <div className='presse'>
            <span className='presse__title'>Presse</span>
            <span className='presse__year'>2020</span>
            <span className='presse__info'>
                Lorem ipsum dolor sit ame
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Hier Link: https://www.karlsruhe.de/b4/international/staedtepartnerschaften/halle/archiv_halle.de
            </span>
            <img alt='presse' className='presse__pic' src={pressepic} />
        </div>
    </Fragment>
)

export default Presse