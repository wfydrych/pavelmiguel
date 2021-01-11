import React, {Fragment} from 'react'
import './Zeichnungen.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
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
        <div className='zeichnungen'>
            <span className='zeichnungen__info'>Zeichnungen</span>
            <Carousel dynamicHeight={true} showArrows={true}>
                <div>
                    <img src={p1} alt="Kannibalen"/>
                    <p className="legend">Kannibalen</p>
                </div>
                <div>
                    <img src={p2} alt="Kannibalen"/>
                    <p className="legend">Kannibalen</p>
                </div>
                <div>
                    <img src={p3} alt="Kannibalen"/>
                    <p className="legend">Kannibalen</p>
                </div>
                <div>
                    <img src={p4} alt="Kannibalen"/>
                    <p className="legend">Kannibalen</p>
                </div>
                <div>
                    <img src={p5} alt="Kannibalen"/>
                    <p className="legend">Kannibalen</p>
                </div>
                <div>
                    <img src={p6} alt="Kannibalen"/>
                    <p className="legend">Kannibalen</p>
                </div>
                <div>
                    <img src={p7} alt="Kannibalen"/>
                    <p className="legend">Kannibalen</p>
                </div>
                <div>
                    <img src={p8} alt="Kannibalen"/>
                    <p className="legend">Kannibalen</p>
                </div>
                <div>
                    <img src={p9} alt="Kannibalen"/>
                    <p className="legend">Kannibalen</p>
                </div>
                <div>
                    <img src={p10} alt="Dostojewski"/>
                    <p className="legend">Dostojewski</p>
                </div>
                <div>
                    <img src={p11} alt="Hesse"/>
                    <p className="legend">Hesse</p>
                </div>
                <div>
                    <img src={p12} alt="Baudelaire"/>
                    <p className="legend">Baudelaire</p>
                </div>
                <div>
                    <img src={p13} alt="Camus"/>
                    <p className="legend">Camus</p>
                </div>
                <div>
                    <img src={p14} alt="Gegen Radioaktivität"/>
                    <p className="legend">Gegen Radioaktivität</p>
                </div>
                <div>
                    <img src={p15} alt="Neues Leben"/>
                    <p className="legend">Neues Leben</p>
                </div>
                <div>
                    <img src={p16} alt="Spiegelung"/>
                    <p className="legend">Spiegelung</p>
                </div>
                <div>
                    <img src={p17} alt="Wurzelschlage"/>
                    <p className="legend">Wurzelschlage</p>
                </div>
                <div>
                    <img src={p18} alt="pipimann"/>
                    <p className="legend">pipimann</p>
                </div>
                <div>
                    <img src={p19} alt="ich liebe meine Arbeit"/>
                    <p className="legend">ich liebe meine Arbeit</p>
                </div>
                <div>
                    <img src={p20} alt="boot"/>
                    <p className="legend">boot</p>
                </div>
                <div>
                    <img src={p21} alt="hai"/>
                    <p className="legend">hai</p>
                </div>
                <div>
                    <img src={p22} alt="Auf den Lorbeeren ausruhen"/>
                    <p className="legend">Auf den Lorbeeren ausruhen</p>
                </div>
            </Carousel>
        </div>
    </Fragment>
)

export default Zeichnungen