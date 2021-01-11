import React, {Fragment} from 'react'
import './Aktuelles.sass'
import aktuelles from './img/aktuelles.jpg'

const Aktuelles = (props) => 
    (
    <Fragment>
        <div className='aktuelles'>
            <span className='aktuelles__title'>Aktuelles</span>
            <span className='aktuelles__year'>2020</span>
            <img alt='aktuelles' className='aktuelles__pic' src={aktuelles} />
        </div>
    </Fragment>
)

export default Aktuelles