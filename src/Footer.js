import React, {Fragment} from 'react'
import './Footer.sass'

const Footer = (props) => 
    (
    <Fragment>
        <footer>
            <div className='footer footer-left'>Atelier Pavel Miguel Georgstr.17, 76327 Pfinztal</div>
            <div className='footer footer-mid'>0721 4539 688 <span>pavelmiguel@yahoo.de</span></div>
            <div className='footer footer-right'>Impressum</div>
        </footer>
    </Fragment>
)

export default Footer