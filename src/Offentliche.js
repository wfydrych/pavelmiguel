import React, {Fragment} from 'react'
import './Offentliche.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Context from './Context'
import './slider_settings.sass'
import p1 from './img/oeffentliche/1.jpg'
import p2 from './img/oeffentliche/2.jpg'
import p3 from './img/oeffentliche/3.jpg'
import p4 from './img/oeffentliche/4.jpg'
import p5 from './img/oeffentliche/5.jpg'
import p6 from './img/oeffentliche/6.jpg'
import p7 from './img/oeffentliche/7.jpg'
import p8 from './img/oeffentliche/8.jpg'
import p9 from './img/oeffentliche/9.jpg'

const Offentliche = (props) => 
    (
    <Fragment>
        <Context.Consumer>
        { (context) => (
            <div className='offentliche'>
                <span className='offentliche__info'>{context.gallery[0]}</span>
                <Carousel dynamicHeight={true} showArrows={true}>
                    <div>
                        <img loading="lazy" src={p1} alt={context.offentliche[0]}/>
                        <p className="legend">{context.offentliche[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p2} alt={context.offentliche[1]}/>
                        <p className="legend">{context.offentliche[1]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p3} alt={context.offentliche[1]}/>
                        <p className="legend">{context.offentliche[1]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p4} alt={context.offentliche[1]}/>
                        <p className="legend">{context.offentliche[1]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p5} alt={context.offentliche[2]}/>
                        <p className="legend">{context.offentliche[2]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p6} alt={context.offentliche[3]}/>
                        <p className="legend">{context.offentliche[3]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p7} alt={context.offentliche[4]}/>
                        <p className="legend">{context.offentliche[4]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p8} alt={context.offentliche[4]}/>
                        <p className="legend">{context.offentliche[4]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p9} alt={context.offentliche[5]}/>
                        <p className="legend">{context.offentliche[5]}</p>
                    </div>
                </Carousel>
            </div>
        )}
        </Context.Consumer> 
    </Fragment>
)

export default Offentliche