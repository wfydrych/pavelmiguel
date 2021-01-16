import React, {Fragment} from 'react'
import './Performance.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import './slider_settings.sass'
import p1 from './img/performance/1.jpg'

const Performance = (props) => 
    (
    <Fragment>
        <div className='performance'>
            <span className='performance__info'>Performance</span>
            <Carousel dynamicHeight={true} showArrows={true}>
                <div>
                    <img src={p1} alt="pic-performance"/>
                    <p className="legend">Performance</p>
                </div>
            </Carousel>
        </div>
    </Fragment>
)

export default Performance