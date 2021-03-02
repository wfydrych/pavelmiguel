import React, {Fragment} from 'react'
import './Performance.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import './slider_settings.sass'
import p1 from './img/performance/1.jpg'
import p2 from './img/performance/2.jpg'
import p3 from './img/performance/3.jpg'
import p4 from './img/performance/4.jpg'
import p5 from './img/performance/5.jpg'

const Performance = (props) => 
    (
    <Fragment>
        <div className='performance'>
            <span className='performance__info'>Performance</span>
            <Carousel dynamicHeight={true} showArrows={true}>
                <div>
                    <img loading="lazy" src={p1} alt="Hockenheim, 2020"/>
                    <p className="legend">Hockenheim, 2020</p>
                </div>
                <div>
                    <img loading="lazy" src={p2} alt="Mannheim, 2020"/>
                    <p className="legend">Mannheim, 2020</p>
                </div>
                <div>
                    <img loading="lazy" src={p3} alt="Lidellplatzfest, 2015"/>
                    <p className="legend">Lidellplatzfest, 2015</p>
                </div>
                <div>
                    <img loading="lazy" src={p4} alt="Pfinzal, 2014"/>
                    <p className="legend">Pfinzal, 2014</p>
                </div>
                <div>
                    <img loading="lazy" src={p5} alt="Hockenheim , 2020"/>
                    <p className="legend">Hockenheim , 2020</p>
                </div>
            </Carousel>
        </div>
    </Fragment>
)

export default Performance