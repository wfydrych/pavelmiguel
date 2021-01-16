import React, {Fragment} from 'react'
import './Offentliche.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
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
        <div className='offentliche'>
            <span className='offentliche__info'>Öffentliche Werke</span>
            <Carousel dynamicHeight={true} showArrows={true}>
                <div>
                    <img src={p1} alt="Vater und Sohn"/>
                    <p className="legend">Vater und Sohn</p>
                </div>
                <div>
                    <img src={p2} alt="Madonna aus Söllingen"/>
                    <p className="legend">Madonna aus Söllingen</p>
                </div>
                <div>
                    <img src={p3} alt="Madonna aus Söllingen"/>
                    <p className="legend">Madonna aus Söllingen</p>
                </div>
                <div>
                    <img src={p4} alt="Madonna aus Söllingen"/>
                    <p className="legend">Madonna aus Söllingen</p>
                </div>
                <div>
                    <img src={p5} alt="Tänzer"/>
                    <p className="legend">Tänzer</p>
                </div>
                <div>
                    <img src={p6} alt="Grosser Schwimmer"/>
                    <p className="legend">Grosser Schwimmer</p>
                </div>
                <div>
                    <img src={p7} alt="Zappa"/>
                    <p className="legend">Zappa</p>
                </div>
                <div>
                    <img src={p8} alt="Zappa"/>
                    <p className="legend">Zappa</p>
                </div>
                <div>
                    <img src={p9} alt="sag mir was du isst..."/>
                    <p className="legend">sag mir was du isst...</p>
                </div>
            </Carousel>
        </div>
    </Fragment>
)

export default Offentliche