import React, {Fragment} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Context from './Context'
import './Skulpturen.sass'
import './slider_settings.sass'
import p1 from './img/skulpturen/1.jpg'
import p2 from './img/skulpturen/2.jpg'
import p3 from './img/skulpturen/3.png'
import p11 from './img/skulpturen/11.jpg'
import p12 from './img/skulpturen/12.jpg'
import p13 from './img/skulpturen/13.jpg'
import p14 from './img/skulpturen/14.jpg'
import p15 from './img/skulpturen/15.jpg'
import p16 from './img/skulpturen/16.jpg'
import p17 from './img/skulpturen/17.jpg'
import p18 from './img/skulpturen/18.jpg'
import p19 from './img/skulpturen/19.jpg'
import p20 from './img/skulpturen/20.jpg'
import p21 from './img/skulpturen/21.png'
import p22 from './img/skulpturen/22.jpg'
import p23 from './img/skulpturen/23.jpg'
import p24 from './img/skulpturen/24.jpg'
import p25 from './img/skulpturen/25.jpg'
import p26 from './img/skulpturen/26.jpg'
import p27 from './img/skulpturen/27.jpg'
import p28 from './img/skulpturen/28.jpg'
import p29 from './img/skulpturen/29.jpg'
import p30 from './img/skulpturen/30.jpg'
import p31 from './img/skulpturen/31.jpg'

const Skulpturen = (props) => 
    (
    <Fragment>
        <Context.Consumer>
        { (context) => (
            <div className='skulpturen'>
                <span className='skulpturen__info'>{context.gallery[1]}</span>
                <Carousel dynamicHeight={true} showArrows={true}>
                    <div>
                        <img loading="lazy" src={p1} alt={context.skulpturen[0]}/>
                        <p className="legend">{context.skulpturen[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p2} alt={context.skulpturen[1]}/>
                        <p className="legend">{context.skulpturen[1]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p3} alt={context.skulpturen[2]}/>
                        <p className="legend">{context.skulpturen[2]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p11} alt={context.skulpturen[3]}/>
                        <p className="legend">{context.skulpturen[3]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p12} alt={context.skulpturen[4]}/>
                        <p className="legend">{context.skulpturen[4]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p13} alt={context.skulpturen[5]}/>
                        <p className="legend">{context.skulpturen[5]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p14} alt={context.skulpturen[6]}/>
                        <p className="legend">{context.skulpturen[6]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p15} alt={context.skulpturen[7]}/>
                        <p className="legend">{context.skulpturen[7]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p16} alt={context.skulpturen[8]}/>
                        <p className="legend">{context.skulpturen[8]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p17} alt={context.skulpturen[9]}/>
                        <p className="legend">{context.skulpturen[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p18} alt={context.skulpturen[10]}/>
                        <p className="legend">{context.skulpturen[10]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p19} alt={context.skulpturen[11]}/>
                        <p className="legend">{context.skulpturen[11]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p20} alt={context.skulpturen[12]}/>
                        <p className="legend">{context.skulpturen[12]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p21} alt={context.skulpturen[13]}/>
                        <p className="legend">{context.skulpturen[13]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p22} alt={context.skulpturen[14]}/>
                        <p className="legend">{context.skulpturen[14]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p23} alt={context.skulpturen[15]}/>
                        <p className="legend">{context.skulpturen[15]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p24} alt={context.skulpturen[16]}/>
                        <p className="legend">{context.skulpturen[16]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p25} alt={context.skulpturen[17]}/>
                        <p className="legend">{context.skulpturen[17]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p26} alt={context.skulpturen[18]}/>
                        <p className="legend">{context.skulpturen[18]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p27} alt={context.skulpturen[19]}/>
                        <p className="legend">{context.skulpturen[19]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p28} alt={context.skulpturen[20]}/>
                        <p className="legend">{context.skulpturen[20]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p29} alt={context.skulpturen[21]}/>
                        <p className="legend">{context.skulpturen[21]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p30} alt={context.skulpturen[22]}/>
                        <p className="legend">{context.skulpturen[22]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p31} alt={context.skulpturen[23]}/>
                        <p className="legend">{context.skulpturen[23]}</p>
                    </div>
                </Carousel>
            </div>
        )}
        </Context.Consumer>
    </Fragment>
)

export default Skulpturen