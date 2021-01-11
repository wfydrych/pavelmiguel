import React, {Fragment} from 'react'
import './Malerei.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
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
        <div className='malerei'>
            <span className='malerei__info'>Malerei</span>
            <Carousel dynamicHeight={true} showArrows={true}>
                <div>
                    <img src={p1} alt="Himmel für Maulwürfe"/>
                    <p className="legend">Himmel für Maulwürfe</p>
                </div>
                <div>
                    <img src={p2} alt="Himmel für Maulwürfe"/>
                    <p className="legend">Himmel für Maulwürfe</p>
                </div>
                <div>
                    <img src={p3} alt="Sonne"/>
                    <p className="legend">Sonne</p>
                </div>
                <div>
                    <img src={p4} alt="Der trunkene Schiff"/>
                    <p className="legend">Der trunkene Schiff</p>
                </div>
                <div>
                    <img src={p5} alt="Steuermann"/>
                    <p className="legend">Steuermann</p>
                </div>
                <div>
                    <img src={p6} alt="Unterhose in der Himmel"/>
                    <p className="legend">Unterhose in der Himmel</p>
                </div>
                <div>
                    <img src={p7} alt="Das Haus am Ende der Welt"/>
                    <p className="legend">Das Haus am Ende der Welt</p>
                </div>
                <div>
                    <img src={p8} alt="Spiegelung"/>
                    <p className="legend">Spiegelung</p>
                </div>
                <div>
                    <img src={p9} alt="Heavy metal I"/>
                    <p className="legend">Heavy metal I</p>
                </div>
                <div>
                    <img src={p10} alt="Heavy metal III"/>
                    <p className="legend">Heavy metal III</p>
                </div>
                <div>
                    <img src={p11} alt="Heavy metal II"/>
                    <p className="legend">Heavy metal II</p>
                </div>
                <div>
                    <img src={p12} alt="Atomische Sardellen"/>
                    <p className="legend">Atomische Sardellen</p>
                </div>
                <div>
                    <img src={p13} alt="Tunfisch"/>
                    <p className="legend">Tunfisch</p>
                </div>
                <div>
                    <img src={p14} alt="Goldbrasse"/>
                    <p className="legend">Goldbrasse</p>
                </div>
                <div>
                    <img src={p15} alt="Atomische Sardellen"/>
                    <p className="legend">Atomische Sardellen</p>
                </div>
                <div>
                    <img src={p16} alt="Barrakuda"/>
                    <p className="legend">Barrakuda</p>
                </div>
                <div>
                    <img src={p17} alt="Fischers"/>
                    <p className="legend">Fischers</p>
                </div>
                <div>
                    <img src={p18} alt="Traum"/>
                    <p className="legend">Traum</p>
                </div>
                <div>
                    <img src={p19} alt="Oase"/>
                    <p className="legend">Oase</p>
                </div>
                <div>
                    <img src={p20} alt="Ich ohne Frühstück"/>
                    <p className="legend">Ich ohne Frühstück</p>
                </div>
                <div>
                    <img src={p21} alt="Osche"/>
                    <p className="legend">Osche</p>
                </div>
                <div>
                    <img src={p22} alt="Stummeman"/>
                    <p className="legend">Stummeman</p>
                </div>
                <div>
                    <img src={p23} alt="Schwarze Serie"/>
                    <p className="legend">Schwarze Serie</p>
                </div>
                <div>
                    <img src={p24} alt="Schwarze Serie"/>
                    <p className="legend">Schwarze Serie</p>
                </div>
                <div>
                    <img src={p25} alt="Schwarze Serie"/>
                    <p className="legend">Schwarze Serie</p>
                </div>
                <div>
                    <img src={p26} alt="Schwarze Serie"/>
                    <p className="legend">Schwarze Serie</p>
                </div>
                <div>
                    <img src={p27} alt="Schwarze Serie"/>
                    <p className="legend">Schwarze Serie</p>
                </div>
                <div>
                    <img src={p28} alt="Schwarze Serie"/>
                    <p className="legend">Schwarze Serie</p>
                </div>
                <div>
                    <img src={p29} alt="Landschaft"/>
                    <p className="legend">Landschaft</p>
                </div>
                <div>
                    <img src={p30} alt="Landschaft"/>
                    <p className="legend">Landschaft</p>
                </div>
                <div>
                    <img src={p31} alt="Die Tür zur Ewigkeit"/>
                    <p className="legend">Die Tür zur Ewigkeit</p>
                </div>
            </Carousel>
        </div>
    </Fragment>
)

export default Malerei