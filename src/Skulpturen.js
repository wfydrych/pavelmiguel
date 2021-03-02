import React, {Fragment} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
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
import p32 from './img/skulpturen/32.png'

const Skulpturen = (props) => 
    (
    <Fragment>
        <div className='skulpturen'>
            <span className='skulpturen__info'>Skulpturen</span>
            <Carousel dynamicHeight={true} showArrows={true}>
                <div>
                    <img loading="lazy" src={p1} alt="der stumme mann"/>
                    <p className="legend">der stumme mann</p>
                </div>
                <div>
                    <img loading="lazy" src={p2} alt="Pavel Miguel. Scheiss Krieg"/>
                    <p className="legend">Pavel Miguel. Scheiss Krieg</p>
                </div>
                <div>
                    <img loading="lazy" src={p3} alt="fragen an Gott"/>
                    <p className="legend">fragen an Gott</p>
                </div>
                <div>
                    <img loading="lazy" src={p11} alt="fuck corona"/>
                    <p className="legend">fuck corona</p>
                </div>
                <div>
                    <img loading="lazy" src={p12} alt="ich liebe meiner Job"/>
                    <p className="legend">ich liebe meiner Job</p>
                </div>
                <div>
                    <img loading="lazy" src={p13} alt="meine bessere Seite"/>
                    <p className="legend">meine bessere Seite</p>
                </div>
                <div>
                    <img loading="lazy" src={p14} alt="Kampf gegen die Dunkelheit"/>
                    <p className="legend">Kampf gegen die Dunkelheit</p>
                </div>
                <div>
                    <img loading="lazy" src={p15} alt="die Bestie und die Megabestie"/>
                    <p className="legend">die Bestie und die Megabestie</p>
                </div>
                <div>
                    <img loading="lazy" src={p16} alt="die Erde auf dem Sicht Gottes"/>
                    <p className="legend">die Erde auf dem Sicht Gottes</p>
                </div>
                <div>
                    <img loading="lazy" src={p17} alt="Denker"/>
                    <p className="legend">Denker</p>
                </div>
                <div>
                    <img loading="lazy" src={p18} alt="fuck corona 2"/>
                    <p className="legend">fuck corona 2</p>
                </div>
                <div>
                    <img loading="lazy" src={p19} alt="Atlas"/>
                    <p className="legend">Atlas</p>
                </div>
                <div>
                    <img loading="lazy" src={p20} alt="antiviruskopf"/>
                    <p className="legend">antiviruskopf</p>
                </div>
                <div>
                    <img loading="lazy" src={p21} alt="eurotabletten"/>
                    <p className="legend">eurotabletten</p>
                </div>
                <div>
                    <img loading="lazy" src={p22} alt="auf der Suche nach verlorenen Zeit"/>
                    <p className="legend">auf der Suche nach verlorenen Zeit</p>
                </div>
                <div>
                    <img loading="lazy" src={p23} alt="bunte obst1"/>
                    <p className="legend">bunte obst1</p>
                </div>
                <div>
                    <img loading="lazy" src={p24} alt="bunte obst2"/>
                    <p className="legend">bunte obst2</p>
                </div>
                <div>
                    <img loading="lazy" src={p25} alt="bunte obst3"/>
                    <p className="legend">bunte obst3</p>
                </div>
                <div>
                    <img loading="lazy" src={p26} alt="Feste Ideen"/>
                    <p className="legend">Feste Ideen</p>
                </div>
                <div>
                    <img loading="lazy" src={p27} alt="der Zockel der Kultur"/>
                    <p className="legend">der Zockel der Kultur</p>
                </div>
                <div>
                    <img loading="lazy" src={p28} alt="der Träumer"/>
                    <p className="legend">der Träumer</p>
                </div>
                <div>
                    <img loading="lazy" src={p29} alt="Kirche"/>
                    <p className="legend">Kirche</p>
                </div>
                <div>
                    <img loading="lazy" src={p30} alt="orange fisch"/>
                    <p className="legend">orange fisch</p>
                </div>
                <div>
                    <img loading="lazy" src={p31} alt="hammerhai"/>
                    <p className="legend">hammerhai</p>
                </div>
                <div>
                    <img loading="lazy" src={p32} alt="wohin du gehts, gehst du mit mir"/>
                    <p className="legend">wohin du gehts, gehst du mit mir</p>
                </div>
            </Carousel>
        </div>
    </Fragment>
)

export default Skulpturen