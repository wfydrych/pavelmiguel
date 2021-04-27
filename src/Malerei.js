import React, {Fragment} from 'react'
import './Malerei.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Context from './Context'
import './slider_settings.sass'
import p1 from './img/malerei/1.jpg'
import p2 from './img/malerei/2.jpg'
import p3 from './img/malerei/3.png'
import p4 from './img/malerei/4.jpg'
import p5 from './img/malerei/5.jpg'
import p6 from './img/malerei/6.jpg'
import p7 from './img/malerei/7.jpg'
import p8 from './img/malerei/8.jpg'
import p9 from './img/malerei/9.jpg'
import p10 from './img/malerei/10.png'
import p11 from './img/malerei/11.jpg'
import p12 from './img/malerei/12.jpg'
import p13 from './img/malerei/13.jpg'
import p14 from './img/malerei/14.jpg'
import p15 from './img/malerei/15.jpg'
import p16 from './img/malerei/16.jpg'
import p17 from './img/malerei/17.jpg'
import p18 from './img/malerei/18.jpg'
import p19 from './img/malerei/19.jpg'
import p20 from './img/malerei/20.jpg'
import p21 from './img/malerei/21.jpg'
import p22 from './img/malerei/22.jpg'
import p23 from './img/malerei/23.png'
import p24 from './img/malerei/24.png'
import p25 from './img/malerei/25.png'
import p26 from './img/malerei/26.png'
import p27 from './img/malerei/27.png'
import p28 from './img/malerei/28.png'
import p29 from './img/malerei/29.png'
import p30 from './img/malerei/30.png'
import p31 from './img/malerei/31.jpg'

const Malerei = (props) => 
    (
    <Fragment>
        <Context.Consumer>
        { (context) => (
            <div className='malerei'>
                <span className='malerei__info'>{context.gallery[3]}</span>
                <Carousel dynamicHeight={true} showArrows={true}>
                    <div>
                        <img loading="lazy" src={p1} alt={context.malerei[0]}/>
                        <p className="legend">{context.malerei[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p2} alt={context.malerei[0]}/>
                        <p className="legend">{context.malerei[0]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p3} alt={context.malerei[1]}/>
                        <p className="legend">{context.malerei[1]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p4} alt={context.malerei[2]}/>
                        <p className="legend">{context.malerei[2]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p5} alt={context.malerei[3]}/>
                        <p className="legend">{context.malerei[3]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p6} alt={context.malerei[4]}/>
                        <p className="legend">{context.malerei[4]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p7} alt={context.malerei[5]}/>
                        <p className="legend">{context.malerei[5]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p8} alt={context.malerei[6]}/>
                        <p className="legend">{context.malerei[6]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p9} alt={context.malerei[7]}/>
                        <p className="legend">{context.malerei[7]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p10} alt={context.malerei[7]}/>
                        <p className="legend">{context.malerei[7]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p11} alt={context.malerei[7]}/>
                        <p className="legend">{context.malerei[7]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p12} alt={context.malerei[8]}/>
                        <p className="legend">{context.malerei[8]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p13} alt={context.malerei[9]}/>
                        <p className="legend">{context.malerei[9]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p14} alt={context.malerei[10]}/>
                        <p className="legend">{context.malerei[10]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p15} alt={context.malerei[8]}/>
                        <p className="legend">{context.malerei[8]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p16} alt={context.malerei[11]}/>
                        <p className="legend">{context.malerei[11]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p17} alt="Fischers"/>
                        <p className="legend">Fischers</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p18} alt={context.malerei[12]}/>
                        <p className="legend">{context.malerei[12]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p19} alt={context.malerei[13]}/>
                        <p className="legend">{context.malerei[13]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p20} alt={context.malerei[14]}/>
                        <p className="legend">{context.malerei[14]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p21} alt={context.malerei[15]}/>
                        <p className="legend">{context.malerei[15]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p22} alt={context.malerei[16]}/>
                        <p className="legend">{context.malerei[16]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p23} alt={context.malerei[17]}/>
                        <p className="legend">{context.malerei[17]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p24} alt={context.malerei[17]}/>
                        <p className="legend">{context.malerei[17]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p25} alt={context.malerei[17]}/>
                        <p className="legend">{context.malerei[17]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p26} alt={context.malerei[17]}/>
                        <p className="legend">{context.malerei[17]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p27} alt={context.malerei[17]}/>
                        <p className="legend">{context.malerei[17]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p28} alt={context.malerei[17]}/>
                        <p className="legend">{context.malerei[17]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p29} alt={context.malerei[18]}/>
                        <p className="legend">{context.malerei[18]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p30} alt={context.malerei[18]}/>
                        <p className="legend">{context.malerei[18]}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={p31} alt={context.malerei[19]}/>
                        <p className="legend">{context.malerei[19]}</p>
                    </div>
                </Carousel>
            </div>
        )}
        </Context.Consumer>
    </Fragment>
)

export default Malerei