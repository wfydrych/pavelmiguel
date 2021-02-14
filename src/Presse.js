import React, {Fragment} from 'react'
import './Presse.sass'
import p1 from './img/presse/1.jpg'
import p2 from './img/presse/2.jpg'
import p3 from './img/presse/3.jpg'
import p4 from './img/presse/4.jpg'
import p5 from './img/presse/5.jpg'

const Presse = (props) => 
    (
    <Fragment>
        <div className='presse'>
            <span className='presse__title'>Presse</span>
            <span className='presse__txt'>Januar 2021 Grötzinger Raststube. Bericht von der Ausstellung, Grötzinger Aktuell</span>
            <img alt='presse' className='presse__pic' src={p1} />
            <span className='presse__txt'>November 2020, INKA Kunstmagazin schreibt über meine Skulpturen Park <a href='https://www.inka-magazin.de/kunst-design/pavel-miguel-offener-skulpturenpark.html' target='_blank' className='presse__link'>Mehr info</a></span>
            <img alt='presse' className='presse__pic' src={p2} />
            <span className='presse__txt'>November 2020, Weihnachtsmarkt in Halle an der Saale mit meinem Relief <a href='https://www.karlsruhe.de/b4/international/staedtepartnerschaften/halle/archiv_halle.de' target='_blank' className='presse__link'>Mehr info</a></span>
            <img alt='presse' className='presse__pic' src={p3} />
            <span className='presse__txt'>Oktober 2020 Bericht von meiner Ausstellung in Rahmen von dem Jubiläum „30 Jahre Wiedervereinigung Deutschlands“ <a href='https://www.ka-city.de/home/aktuelles-archiv/detail/pavel-miguel-ausstellung-cafe-grundrechte-karlsruhe-vom-02-10-31-10-2020' target='_blank' className='presse__link'>Mehr info</a></span>
            <img alt='presse' className='presse__pic' src={p4} />
            <span className='presse__txt'>Oktober 2020 Bericht von meiner Ausstellung in der Cafe Grundrecht in Karlsruher Innenstadt <a href='https://presse.karlsruhe.de/db/stadtzeitung/jahr2020/woche41/stadtepartnerschaft_lebendige_stadtefreundschaft.html' target='_blank' className='presse__link'>Mehr info</a></span>
            <img alt='presse' className='presse__pic' src={p5} />
        </div>
    </Fragment>
)

export default Presse