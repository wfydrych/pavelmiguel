import React, {Fragment} from 'react'
import './Aktuelles.sass'
import Context from './Context'
import p1 from './img/aktuelles/1.jpg'
import p2 from './img/aktuelles/2.jpg'
import p3 from './img/aktuelles/3.jpeg'
import p4 from './img/aktuelles/4.jpg'
import p5 from './img/aktuelles/5.jpg'
import p6 from './img/aktuelles/6.jpg'
import p7 from './img/aktuelles/7.jpg'
import p8 from './img/aktuelles/8.jpg'
import p9 from './img/aktuelles/9.jpg'
import p10 from './img/aktuelles/10.jpg'
import p11 from './img/aktuelles/11.jpg'
import p12 from './img/aktuelles/12.jpg'
import p13 from './img/aktuelles/13.jpg'
import p14 from './img/aktuelles/14.jpg'
import p15 from './img/aktuelles/15.jpg'
import p16 from './img/aktuelles/16.jpg'
import p17 from './img/aktuelles/17.jpg'
import p18 from './img/aktuelles/18.jpg'


const Aktuelles = (props) => 
    (
    <Fragment>
        <Context.Consumer>
        { (context) => (
            <div className='aktuelles'>
                <span className='aktuelles__title'>{context.actual[0]}</span>
                <span className='aktuelles__txt'>{context.actual[7]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p1} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p2} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p3} />

                <span className='aktuelles__txt'>{context.actual[6]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p4} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p5} />

                <span className='aktuelles__txt'>{context.actual[5]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p6} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p7} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p8} />

                <span className='aktuelles__txt'>{context.actual[4]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p9} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p10} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p11} />

                <span className='aktuelles__txt'>{context.actual[3]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p12} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p13} />

                <span className='aktuelles__txt'>{context.actual[2]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p14} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p15} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p16} />

                <span className='aktuelles__txt'>{context.actual[1]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p17} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p18} />
            </div>
        )}
        </Context.Consumer>
    </Fragment>
)

export default Aktuelles