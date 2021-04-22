import React, {Fragment} from 'react'
import './Presse.sass'
import Context from './Context'
import p1 from './img/presse/1.jpg'
import p2 from './img/presse/2.jpg'
import p3 from './img/presse/3.jpg'
import p4 from './img/presse/4.jpg'
import p5 from './img/presse/5.jpg'

const Presse = (props) => 
    (
    <Fragment>
        <Context.Consumer>
        { (context) => (
            <div className='presse'>
                <span className='presse__title'>{context.press[0]}</span>
                <span className='presse__txt'>{context.press[6]}</span>
                <img loading="lazy" alt='presse' className='presse__pic' src={p1} />
                <span className='presse__txt'>{context.press[5]} <a href='https://www.inka-magazin.de/kunst-design/pavel-miguel-offener-skulpturenpark.html' target='_blank' className='presse__link'>{context.press[1]}</a></span>
                <img loading="lazy" alt='presse' className='presse__pic' src={p2} />
                <span className='presse__txt'>{context.press[4]} <a href='https://www.karlsruhe.de/b4/international/staedtepartnerschaften/halle/archiv_halle.de' target='_blank' className='presse__link'>{context.press[1]}</a></span>
                <img loading="lazy" alt='presse' className='presse__pic' src={p3} />
                <span className='presse__txt'>{context.press[3]} <a href='https://www.ka-city.de/home/aktuelles-archiv/detail/pavel-miguel-ausstellung-cafe-grundrechte-karlsruhe-vom-02-10-31-10-2020' target='_blank' className='presse__link'>{context.press[1]}</a></span>
                <img loading="lazy" alt='presse' className='presse__pic' src={p4} />
                <span className='presse__txt'>{context.press[2]} <a href='https://presse.karlsruhe.de/db/stadtzeitung/jahr2020/woche41/stadtepartnerschaft_lebendige_stadtefreundschaft.html' target='_blank' className='presse__link'>{context.press[1]}</a></span>
                <img loading="lazy" alt='presse' className='presse__pic' src={p5} />
            </div>
        )}
        </Context.Consumer>
    </Fragment>
)

export default Presse