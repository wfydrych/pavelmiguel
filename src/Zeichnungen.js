import React, {Fragment} from 'react'
import './Zeichnungen.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Context from './Context'
import './slider_settings.sass'
import p1 from './img/zeichnungen/1.png'
import p2 from './img/zeichnungen/2.png'
import p3 from './img/zeichnungen/3.png'
import p4 from './img/zeichnungen/4.png'
import p5 from './img/zeichnungen/5.png'
import p6 from './img/zeichnungen/6.png'
import p7 from './img/zeichnungen/7.png'
import p8 from './img/zeichnungen/8.png'
import p9 from './img/zeichnungen/9.png'
import p10 from './img/zeichnungen/10.jpg'
import p11 from './img/zeichnungen/11.jpg'
import p12 from './img/zeichnungen/12.png'
import p13 from './img/zeichnungen/13.jpg'
import p14 from './img/zeichnungen/14.png'
import p15 from './img/zeichnungen/15.png'
import p16 from './img/zeichnungen/16.png'
import p17 from './img/zeichnungen/17.jpg'
import p18 from './img/zeichnungen/18.jpg'
import p19 from './img/zeichnungen/19.jpg'
import p20 from './img/zeichnungen/20.jpg'
import p21 from './img/zeichnungen/21.jpg'
import p22 from './img/zeichnungen/22.png'

const Zeichnungen = (props) => 
    (
    <Fragment>
        <Context.Consumer>
        { (context) => (
            <div className='zeichnungen'>
                <span className='zeichnungen__info'>{context.gallery[4]}</span>
                <Carousel dynamicHeight={true} showArrows={true}>
                    <div>
                        <img loading="lazy" src={p17} alt={context.zeichnung[8]}/>
                        <p className="legend">{context.zeichnung[8]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p1} alt={context.zeichnung[0]}/>
                        <p className="legend">{context.zeichnung[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p2} alt={context.zeichnung[0]}/>
                        <p className="legend">{context.zeichnung[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p3} alt={context.zeichnung[0]}/>
                        <p className="legend">{context.zeichnung[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p4} alt={context.zeichnung[0]}/>
                        <p className="legend">{context.zeichnung[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p5} alt={context.zeichnung[0]}/>
                        <p className="legend">{context.zeichnung[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p6} alt={context.zeichnung[0]}/>
                        <p className="legend">{context.zeichnung[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p7} alt={context.zeichnung[0]}/>
                        <p className="legend">{context.zeichnung[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p8} alt={context.zeichnung[0]}/>
                        <p className="legend">{context.zeichnung[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p9} alt={context.zeichnung[0]}/>
                        <p className="legend">{context.zeichnung[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p10} alt={context.zeichnung[1]}/>
                        <p className="legend">{context.zeichnung[1]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p11} alt={context.zeichnung[2]}/>
                        <p className="legend">{context.zeichnung[2]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p12} alt={context.zeichnung[3]}/>
                        <p className="legend">{context.zeichnung[3]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p13} alt={context.zeichnung[4]}/>
                        <p className="legend">{context.zeichnung[4]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p14} alt={context.zeichnung[5]}/>
                        <p className="legend">{context.zeichnung[5]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p15} alt={context.zeichnung[6]}/>
                        <p className="legend">{context.zeichnung[6]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p16} alt={context.zeichnung[7]}/>
                        <p className="legend">{context.zeichnung[7]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p18} alt={context.zeichnung[9]}/>
                        <p className="legend">{context.zeichnung[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p19} alt={context.zeichnung[10]}/>
                        <p className="legend">{context.zeichnung[10]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p20} alt={context.zeichnung[11]}/>
                        <p className="legend">{context.zeichnung[11]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p21} alt={context.zeichnung[12]}/>
                        <p className="legend">{context.zeichnung[12]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p22} alt={context.zeichnung[13]}/>
                        <p className="legend">{context.zeichnung[13]}</p>
                    </div>
                </Carousel>
            </div>
        )}
        </Context.Consumer>
    </Fragment>
)

export default Zeichnungen