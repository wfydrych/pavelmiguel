import React, {Fragment} from 'react'
import './Installationen.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Context from './Context'
import './slider_settings.sass'
import p1 from './img/installationen/1.png'
import p2 from './img/installationen/2.jpg'
import p3 from './img/installationen/3.jpg'
import p4 from './img/installationen/4.jpg'
import p5 from './img/installationen/5.jpg'
import p6 from './img/installationen/6.jpg'
import p7 from './img/installationen/7.jpg'
import p8 from './img/installationen/8.jpg'
import p9 from './img/installationen/9.jpg'
import p10 from './img/installationen/10.jpg'
import p11 from './img/installationen/11.jpg'
import p12 from './img/installationen/12.jpg'
import p13 from './img/installationen/13.jpg'
import p14 from './img/installationen/14.jpg'
import p15 from './img/installationen/15.jpg'
import p16 from './img/installationen/16.jpg'
import p17 from './img/installationen/17.jpg'
import p18 from './img/installationen/18.jpg'
import p19 from './img/installationen/19.jpg'
import p20 from './img/installationen/20.jpg'
import p21 from './img/installationen/21.jpg'
import p22 from './img/installationen/22.jpg'
import p23 from './img/installationen/23.jpg'
import p24 from './img/installationen/24.jpg'
import p25 from './img/installationen/25.jpg'
import p26 from './img/installationen/26.jpg'
import p27 from './img/installationen/27.jpg'
import p28 from './img/installationen/28.jpg'
import p29 from './img/installationen/29.jpg'
import p30 from './img/installationen/30.jpg'
import p31 from './img/installationen/31.jpg'
import p32 from './img/installationen/32.jpg'
import p33 from './img/installationen/33.jpg'
import p34 from './img/installationen/34.jpg'
import p35 from './img/installationen/35.jpg'
import p36 from './img/installationen/36.jpg'
import p37 from './img/installationen/37.jpg'

const Installationen = (props) => 
    (
    <Fragment>
        <Context.Consumer>
        { (context) => (
            <div className='installationen'>
                <span className='installationen__info'>{context.gallery[2]}</span>
                <Carousel dynamicHeight={true} showArrows={true}>
                    <div>
                        <img loading="lazy" src={p7} alt={context.installationen[5]}/>
                        <p className="legend">{context.installationen[5]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p1} alt={context.installationen[0]}/>
                        <p className="legend">{context.installationen[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p2} alt={context.installationen[1]}/>
                        <p className="legend">{context.installationen[1]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p3} alt={context.installationen[2]}/>
                        <p className="legend">{context.installationen[2]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p4} alt={context.installationen[3]}/>
                        <p className="legend">{context.installationen[3]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p5} alt={context.installationen[3]}/>
                        <p className="legend">{context.installationen[3]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p6} alt={context.installationen[4]}/>
                        <p className="legend">{context.installationen[4]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p8} alt={context.installationen[6]}/>
                        <p className="legend">{context.installationen[6]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p9} alt={context.installationen[6]}/>
                        <p className="legend">{context.installationen[6]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p10} alt={context.installationen[7]}/>
                        <p className="legend">{context.installationen[7]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p11} alt={context.installationen[7]}/>
                        <p className="legend">{context.installationen[7]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p12} alt={context.installationen[7]}/>
                        <p className="legend">{context.installationen[7]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p13} alt={context.installationen[8]}/>
                        <p className="legend">{context.installationen[8]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p14} alt={context.installationen[9]}/>
                        <p className="legend">{context.installationen[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p15} alt={context.installationen[9]}/>
                        <p className="legend">{context.installationen[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p16} alt={context.installationen[9]}/>
                        <p className="legend">{context.installationen[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p17} alt={context.installationen[9]}/>
                        <p className="legend">{context.installationen[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p18} alt={context.installationen[9]}/>
                        <p className="legend">{context.installationen[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p19} alt={context.installationen[9]}/>
                        <p className="legend">{context.installationen[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p20} alt={context.installationen[9]}/>
                        <p className="legend">{context.installationen[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p21} alt={context.installationen[9]}/>
                        <p className="legend">{context.installationen[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p22} alt={context.installationen[10]}/>
                        <p className="legend">{context.installationen[10]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p23} alt={context.installationen[11]}/>
                        <p className="legend">{context.installationen[11]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p24} alt={context.installationen[12]}/>
                        <p className="legend">{context.installationen[12]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p25} alt={context.installationen[13]}/>
                        <p className="legend">{context.installationen[13]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p26} alt={context.installationen[14]}/>
                        <p className="legend">{context.installationen[14]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p27} alt={context.installationen[14]}/>
                        <p className="legend">{context.installationen[14]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p28} alt={context.installationen[14]}/>
                        <p className="legend">{context.installationen[14]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p29} alt={context.installationen[15]}/>
                        <p className="legend">{context.installationen[15]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p30} alt={context.installationen[16]}/>
                        <p className="legend">{context.installationen[16]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p31} alt={context.installationen[17]}/>
                        <p className="legend">{context.installationen[17]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p32} alt={context.installationen[18]}/>
                        <p className="legend">{context.installationen[18]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p33} alt={context.installationen[19]}/>
                        <p className="legend">{context.installationen[19]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p34} alt={context.installationen[19]}/>
                        <p className="legend">{context.installationen[19]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p35} alt={context.installationen[20]}/>
                        <p className="legend">{context.installationen[20]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p36} alt={context.installationen[21]}/>
                        <p className="legend">{context.installationen[21]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p37} alt={context.installationen[22]}/>
                        <p className="legend">{context.installationen[22]}</p>
                    </div>
                </Carousel>
            </div>
        )}
        </Context.Consumer> 
    </Fragment>
)

export default Installationen