import React, {Fragment} from 'react'
import './Performance.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Context from './Context'
import './slider_settings.sass'
import p1 from './img/performance/1.jpg'
import p2 from './img/performance/2.jpg'
import p3 from './img/performance/3.jpg'
import p4 from './img/performance/4.jpg'
import p5 from './img/performance/5.jpg'

const Performance = (props) => 
    (
    <Fragment>
        <Context.Consumer>
        { (context) => (
            <div className='performance'>
                <span className='performance__info'>{context.gallery[5]}</span>
                <Carousel dynamicHeight={true} showArrows={true}>
                    <div>
                        <img loading="lazy" src={p1} alt={context.performance[0]}/>
                        <p className="legend">{context.performance[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p2} alt={context.performance[0]}/>
                        <p className="legend">{context.performance[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p3} alt={context.performance[1]}/>
                        <p className="legend">{context.performance[1]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p4} alt={context.performance[2]}/>
                        <p className="legend">{context.performance[2]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p5} alt={context.performance[3]}/>
                        <p className="legend">{context.performance[3]}</p>
                    </div>
                </Carousel>
            </div>
        )}
       </Context.Consumer> 
    </Fragment>
)

export default Performance