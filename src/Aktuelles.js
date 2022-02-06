import React, {Fragment} from 'react'
import './Aktuelles.sass'
import Context from './Context'
import p1 from './img/aktuelles/1.jpg'
import p2 from './img/aktuelles/2.jpg'
import p3 from './img/aktuelles/3.jpeg'
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
import new1 from './img/aktuelles/2021/1.jpg'
import new2 from './img/aktuelles/2021/2.jpg'
import new3 from './img/aktuelles/2021/3.jpg'
import new4 from './img/aktuelles/2021/4.jpg'
import new5 from './img/aktuelles/2021/5.jpg'
import new6 from './img/aktuelles/2021/6.jpg'
import new7 from './img/aktuelles/2021/7.jpg'
import new8 from './img/aktuelles/2021/8.jpg'
import new9 from './img/aktuelles/2021/9.jpg'
import new10 from './img/aktuelles/2021/10.jpg'
import new11 from './img/aktuelles/2021/11.jpg'
import new12 from './img/aktuelles/2021/12.jpg'
import new13 from './img/aktuelles/2021/13.jpg'
import new14 from './img/aktuelles/2021/14.jpg'
import new16 from './img/aktuelles/2021/16.jpg'
import new17 from './img/aktuelles/2021/17.jpg'
import new18 from './img/aktuelles/2021/18.jpg'
import new19 from './img/aktuelles/2021/19.jpg'
import new20 from './img/aktuelles/2021/20.jpg'
import new21 from './img/aktuelles/2021/21.jpg'
import new22 from './img/aktuelles/2021/22.jpg'
import new23 from './img/aktuelles/2021/23.jpg'



const Aktuelles = (props) => 
    (
    <Fragment>
        <Context.Consumer>
        { (context) => (
            <div className='aktuelles'>
                <span className='aktuelles__title'>{context.actual[0]}</span>

                <span className='aktuelles__txt'>{context.actual[17]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new21} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new22} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new23} />

                <span className='aktuelles__txt'>{context.actual[16]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new16} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new17} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new18} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new19} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new20} />

                <span className='aktuelles__txt'>{context.actual[15]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new14} />

                <span className='aktuelles__txt'>{context.actual[14]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new13} />

                <span className='aktuelles__txt'>{context.actual[13]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new11} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new12} />

                <span className='aktuelles__txt'>{context.actual[12]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new7} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new8} />

                <span className='aktuelles__txt'>{context.actual[11]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new9} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new10} />

                <span className='aktuelles__txt'>{context.actual[10]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new5} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new6} />

                <span className='aktuelles__txt'>{context.actual[9]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new3} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new4} />

                <span className='aktuelles__txt'>{context.actual[8]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new1} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={new2} />

                <span className='aktuelles__txt'>{context.actual[7]}</span>
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p1} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p2} />
                <img loading="lazy" alt='aktuelles' className='aktuelles__pic' src={p3} />

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