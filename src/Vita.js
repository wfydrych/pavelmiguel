import React, {Fragment} from 'react'
import './Vita.sass'

const german = `
1995   Preis für Keramikskulptur – Cienfuegos, Kuba
1996   Preis "Salón de la Ciudad" – Cienfuegos, Kuba
1997   Preis "Salón del Mar" - Cienfuegos, Kuba
1998   Preis des UNEAC - Kuba
2001   Erster Preis des ACEA – Barcelona, Spanien 
2006   Preis des SWIP - Deutschland
`

const useGer = () => {
    console.log(`exa
    mple`)
//     document.querySelector('.exampleClass').innerHtml = `exa
// mple`
}

const Vita = (props) => 
    (
    <Fragment>
        <div className='vita'>
        <span className='vita__title'>Pavel Miguel</span>
        1962 Cienfuegos, Kuba geboren<br />
    1980-1985 Universität Havanna, Diplom für Sport und physische Kultur<br />
    1990-1995 Kunstschule Cienfuegos, Kuba<br />
    1995          Mitbegründer der Gruppe PUNTO (erste unabhängige Künstlergruppe in
                    Kuba) und Projekt Coordenada Arte Sur <br />
    1995          Gastkünstler in Karlsruhe, Atelier in der Staatlichen Majolika Karlsruhe<br />
    2000-2005 Atelier in Barcelona<br />
    seit 1996   Mitglied des UNEAC (Verein nationaler Schriftsteller und Künstler Kubas) seit 2007   Mitglied des BBK<br />
    seit 2010   Atelier Pavel Miguel<br />
    seit 2014   Mitglied Deutsche Verein Kunst für Frieden<br />
    2015          Mitbegründer der Galerie Z-2 Durlach<br />
    seit 1998   lebt und arbeitet in Deutschland<br />
        
    <span className='vita__subtitle'>Ausstellungen  (Auswahl)</span>
    
    2020   Kunstbrücke,Trier, Deutschland<br />
    2019   XIII Bienal Havanna, Kuba<br />
    2018   Frisch aufgestellt, Skulpturen Park, Schweigen Rechtenbach<br />
    2017   La Escultura en Cienfuegos, Museo Provincial, Kuba<br />
    2016   Migration, Alter Schlachthof Karlsruhe<br />
    2015   Zwanzig Jahre Jubiläum Gruppe PUNTO, Stiftung Ludwig, Havanna, Kuba. Katalog<br />
    2015   Kunst für Frieden, Friedensatelier, Regensburg<br />
    2014   „Diesseits“, BBK Karlsruhe (mit Norbert Hollerbach). Katalog<br />
    2013   „Che, von Europa aus gesehen, Badischer Landesmuseum Karlsruhe<br />
    2013   Miami Biennale 2013, Miami, USA. Katalog<br />
    2012   Projekt das besetzte Haus, Durlach, Karlsruhe (mit Antonio Fernandez und W. Kopf)<br />
    2011   „Europas Rad“ (Public Skulptur) Rathaus Reichshoffen, Frankreich<br />
    2011   „Tanzenden Menschen“ (Public Skulptur) Rathausplatz, Söllingen, Pfinztal<br />
    2010  Salon UNEAC, Galerie UNEAC, Cienfuegos, Kuba. Katalog<br />
    2009  “Yo soy el Mar”, BBK Karlsruhe (mit Sandro Vadim). Katalog<br />
    2008  „Alles was ich wissen sollte“ Buchmesse Frankfurt<br />
    2007  Skulpturen Key West, Florida, USA. Katalog<br />
    2006  „10 Minute für 10 Jahren“, Retrospektive, Hauptbahnhof Karlsruhe. Katalog<br />
    2005  Biennale Art-Mar, Museum Marítimo, Barcelona. Katalog<br />
    2004  ”Hommage an Dalí”, Museo Abello, Barcelona. Katalog<br />
    2003  Biennale Liverpool, England<br />
    2000  Kubanische Gegenwart Kunst Sammlung, Ludwigs Forum, Aachen<br />
    1999  „Zirkus“, Solo Ausstellung, Galerie Majolika, Karlsruhe. Katalog<br />
    1998  II Salón Arte Contemporáneo, Galería Nacional, Havanna, Kuba. Katalog<br />
    1997  VII Biennale Havanna, Gruppe PUNTO, Havanna, Kuba. Katalog<br />
    1996  “Imagen y posibilidad”, Gruppe PUNTO, Gothaer Kunstforum, Köln. Katalog<br />
    1995  I Salon Arte Contemporaneo, Havanna. Katalog<br />
    
    <span className='vita__subtitle'>Öffentliche Sammlungen und Institutionen</span>
    
    1995  Las varices, Colección Historisches Museum, Cienfuegos, Kuba<br />
    1996  Triumphbogen (Skulptur), Museum der Keramik, Havanna, Camarón (Skulptur), Poder Popular, Cienfuegos, Kuba<br />
    1996  Drei Arten im Meer zu sterben (Installation), Museo Naval, Cienfuegos, Kuba<br />
    1997  Köder für Schiffbrüchige (Installation), Museo Naval, Cienfuegos, Kuba<br />
    1998  Himmelsleiter (Installation), Haus der neue Kunst, Cienfuegos, Kuba<br />
    1999  Steuermänner (Zeichnungen), Regierungspräsidium Karlsruhe<br />
    2000  Hängematte (Installation), Museum Ludwig Forum, Aachen<br />
    2005  Wohin du gehst, gehst du mit mir (Installation) Museum Marítimo Barcelona<br />
    2008  Madonna von Söllingen (Skulptur), Leerdamplatz, Pfinztal, Deutschland.<br />
    2012  Tanzenden Menschen(Skulptur) Rathausplatz, Pfinztal<br />
    2014 Vater und Kind (Skulptur) Leerdamplatz, Pfinztal, Deutschland<br />
    
    <span className='vita__subtitle'>Auszeichnungen</span>
    
    {/* 1995   Preis für Keramikskulptur – Cienfuegos, Kuba<br />
    1996   Preis "Salón de la Ciudad" – Cienfuegos, Kuba<br />
    1997   Preis "Salón del Mar" - Cienfuegos, Kuba<br />
    1998   Preis des UNEAC - Kuba<br />
    2001   Erster Preis des ACEA – Barcelona, Spanien<br /> 
    2006   Preis des SWIP - Deutschland<br /> */}
    {german}
    {useGer()}
    <div className='exampleClass'>sdsad</div>
    
    <span className='vita__subtitle'> Bibliographie</span>
    
    II Salon Arte Contemporaneo, Cuba 1998. Katalog<br />
    Arte Cubano. 2/ 1998<br />
    Arte Cubano. 1/ 1999<br />
    Arte Cubano. 1/ 2000 <br />
    Arte Cubano. 1/ 2018<br />
    Revista Arte. Barcelona .Nr 7 .2001<br />
    Revista Arte. Barcelona. Nr 2 .2002<br />
    Escultura en Cuba. Jose Vega. 2005. ISBN 959-11-0425-1<br />
    40 Jahre Pfinztal. 2014<br />
    INKA. Karlsruhe Stadtmagazin. Nr 128. 15.6-14.7.2017<br />
    Ein Kubaner an der Pfinz. Tagebuch des Fächerstadt. 2004<br />
        </div>
    </Fragment>
)

export default Vita