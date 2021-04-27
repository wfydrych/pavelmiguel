import React, {Component} from 'react'
import Context from './Context';

class Provider extends Component {
    state = {
        menu: ['Menü', 'Home', 'Werke', 'Vita', 'Aktuelles', 'Presse', 'Kontakt'],
        galleries: ['Öffentliche Werke', 'Skulpturen', 'Installationen', 'Malerei', 'Zeichnungen', 'Performance'],
        press: ['Presse',
            'Mehr info', 
            'Oktober 2020 Bericht von meiner Ausstellung in der Cafe Grundrecht in Karlsruher Innenstadt',
            'Oktober 2020 Bericht von meiner Ausstellung in Rahmen von dem Jubiläum „30 Jahre Wiedervereinigung Deutschlands“',
            'November 2020, Weihnachtsmarkt in Halle an der Saale mit meinem Relief',
            'November 2020, INKA Kunstmagazin schreibt über meine Skulpturen Park',
            'Januar 2021 Grötzinger Raststube. Bericht von der Ausstellung, Grötzinger Aktuell'],
        actual: ['Aktuelles',
            'Oktober 2020 - „Menschenrechte- Presse- und Meinungsfreiheit“ – Aufbau meiner Ausstellung bei der Café Grundrecht in der Karlsruher Innensdtadt',
            'Oktober 2020 – Ausstellung „Menschenrechte- Presse- und Meinungsfreiheit“ in der Café Grundrecht in Karlsruhe',
            'November 2020 – Offene Ateliers: mein eigenes Skulpturen Park',
            'November 2020 – Montage von meiner Skulptur „Aus eigenen Antrieb”, Karlsruhe-Durlach',
            'Januar 2021, „Heimat“ - Aufbau den Reliefs bei Grötzinger Raststube',
            'Januar 2021 Ausstellung „Heimat“. Restaurant Grötzinger Raststube',
            'Januar 2021 2020/2021 Kunst während Corona'],
        offentliche: ['Vater und Sohn', 'Madonna aus Söllingen', 'Tänzer', 'Grosser Schwimmer', 'Zappa', 'sag mir was du isst...'],
        skulpturen: ['der stummemann', 'Scheiss Krieg', 'fragen an Gott', 'fuck corona', 'ich liebe meiner Job', 'Meine bessere Seite (2)', 'Kampf gegen die Dunkelheit',
            'die Bestie und die Megabestie', 'die Erde auf dem Sicht Gottes', 'Denker', 'fuck corona 2', 'Atlas', 'Antiviruskopf', 'Eurotabletten', 
            'auf der Suche nach verlorenen Zeit', 'bunte obst1', 'bunte obst2', 'bunte obst3', 'Feste Ideen', 'der Zockel der Kultur', 'der Träumer', 
            'Kirche', 'orange Fisch', 'Hammerhai', 'wohin du gehts, gehst du mit mir'],
        installationen: ['es ist schmerzhaft Erbe zu sein', 'Himmelsleiter', 'mein Heimat', 'auf dem Lorbeeren ausruhen', 'wohin du geht’s, gehst du mit mir', 
            'alles was ich wissen sollte', 'der Eroberer kommt', 'Bäume', 'welcome to the machine', 'Wurzeln schlagen', 'die Welle der Illusion', 
            'dein Kurs bestimmen (dieselbe)', 'dein Kurs bestimmen', 'es ist schmerzhaft erbe zu sein2', 'Brille gegen radioaktivität', 'sie hatten zu große Flügel',
            'gift vs. gift', 'europäische Hündin', 'sisyphus', 'Was bleibt?', 'Nietzsche', 'Dostojewski', 'Hesse'],
        malerei: ['Himmel für Maulwürfe', 'Sonne', 'Der trunkene Schiff', 'Steuermann', 'Unterhose in der Himmel', 'Das Haus am Ende der Welt', 'Spiegelung',
            'Heavy metal', 'Atomische Sardellen', 'Tunfisch', 'Goldbrasse', 'Barrakuda', 'Traum', 'Oase', 'Ich ohne Frühstück', 'Osche', 'Stummeman',
            'Schwarze Serie', 'Landschaft', 'Die Tür zur Ewigkeit'],
        zeichnung: ['Kannibalen', 'Dostojewski', 'Hesse', 'Baudelaire', 'Camus', 'Gegen Radioaktivität', 'Neues Leben', 'Spiegelung', 'Wurzelschlagen', 
            'pipimann', 'ich liebe meine Arbeit', 'boot', 'hai', 'Auf den Lorbeeren ausruhen'],
        performance: ['2020 Mannheim', 'Lidellplatzfest, 2015', 'peformance, Hockenheim, 2020', 'Pfinzal, 2014'],
        lang: 'de'
    };

    render() {
        return (
            <Context.Provider
                value={{
                    menu: this.state.menu,
                    lang: this.state.lang,
                    gallery: this.state.galleries,
                    press: this.state.press,
                    actual: this.state.actual,
                    offentliche: this.state.offentliche,
                    skulpturen: this.state.skulpturen,
                    installationen: this.state.installationen,
                    malerei: this.state.malerei,
                    zeichnung: this.state.zeichnung,
                    performance: this.state.performance,
                    changeLang: lang => {
                        if (lang === 'en') {
                            this.setState({
                                menu: ['Menu', 'Home', 'Works', 'Vita', 'News', 'Press', 'Contact'],
                                galleries: ['Public works', 'Sculpture', 'Installation', 'Painting', 'Drawing', 'Performance'],
                                press: ['Press',
                                    'More info', 
                                    'October 2020. An artice about my exhibition at Café Grundrecht at city center of Karlsruhe',
                                    'October 2020. An Article about my exhibition in conjunction with the 30 years anniversary of the germans reunification.',
                                    'November 2020, Christmas Market in Halle an der Salle with my relief',
                                    'November 2020. An article about my sculpture park at INKA art-magazine',
                                    'January 2021. An Article about my exhibition at the Grötzinger Raststube. Newspaper: Grötzinger Aktuell'],
                                actual: ['News',
                                    'Oktober 2020 – setting up my Exhibition at the Café Grundrecht in the city center of Karlsruhe',
                                    'October 2020 – Exhibition „Menschenrechte- Presse- und Meinungsfreiheit“ (Human rights, freedom of press and free spich) at the Café Grundrecht in Karlsruhe, Germany',
                                    'November 2020 – open studio: welcome at my sculpture park',
                                    'November 2020 – Installing my sculpture „Self-propelled”, Karlsruhe, Germany',
                                    'January 2021 Exhibition „Heimat“ – setting up my reliefs at the Grötzinger Raststube',
                                    'January 2021 Exhibition „Heimat“ ( Homeland). Restaurant Grötzinger Raststube',
                                    'January 2021 2020/2021 My art during corona'],
                                    offentliche: ['Father and son', 'Madonna from Söllingen', 'The Dance', 'The big swimmer', 'Zappa', 'sag mir was du isst...'],
                                    skulpturen: ['The dumb', 'Shit war', 'Questions to God', 'Fuck corona', 'I love my job', 'The best of me', 'Rage against the darkness',
                                        'The beast and the mega beast', 'The earth from Gods point of view', 'Thinker', 'Fuck corona 2', 'Atlas', 'antivirus head', 'Euro pills', 
                                        'In search of lost time', 'Colourful fruits 1', 'Colourful fruits 2', 'Colourful fruits 3', 'Hard ideas', 'Pedestal oft the culture', 'The dreamer', 
                                        'Church', 'Orange Fish', 'Hammershark', 'Wherever you go, you will go with me'],
                                    installationen: ['It’s painful to be heir', 'Stairway to heaven', 'My homeland', 'Don’t rest on your laurels', 'Wherever you go, you will go with me', 
                                        'All that I need to know', 'The Conquerer arrived', 'Trees', 'welcome to the machine', 'To take root', 'The wave of ilusion', 
                                        'To steer a course', 'To steer a course', 'It’s painful to be heir', 'Glasses against radioactivity', 'They had to big wings',
                                        'Poison vs. poison', 'The european bitch', 'Sisyphus', 'What lasts?', 'Nietzsche', 'Dostojewski', 'Hesse'],
                                    malerei: ['Heaven for moles', 'Sun', 'The drunken boat', 'Helmsman', 'Pants in the heaven', 'The house at the end of the world', 'Reflection',
                                        'Heavy metal', 'Atomic anchovies', 'Tuna', 'Gilthead', 'Barracuda', 'Dream', 'Oasis', 'Me without a breakfest', 'Ox', 'Dumb person',
                                        'Black Series', 'Landscape', 'The door to the eternity'],
                                    zeichnung: ['Cannibals', 'Dostojewski', 'Hesse', 'Baudelaire', 'Camus', 'Against radioactivity', 'New life', 'Reflection', 'To take root', 
                                        'Wee man', 'I love my job', 'boat', 'shark', 'Don’t rest on your laurels'],
                                    performance: ['2020 Mannheim', 'Celebration at the Lidellplatz, 2015', 'peformance, Hockenheim, 2020', 'Pfinzal, 2014'],
                                lang: 'en',
                            })
                        }
                        else if (lang === 'es') {
                            this.setState({
                                menu: ['Menu', 'Home', 'Werke', 'Vita', 'Aktuelles', 'Presse', 'Kontakt'],
                                galleries: ['Obra pública', 'Esculturas', 'Instalaciones', 'Pinturas', 'Dibujos', 'Acciones'],
                                press: ['Presse',
                                    'Más información', 
                                    'Octubre 2020 Artículo sobre Expo personal en Cafe de los Derechos Humanos en Karlsruhe',
                                    'Octubre 2020 Artículo sobre Expo personal en conjuncion con el 30 Aniversario de la reunificación alemana',
                                    'Noviembre 2020 Articulo en Feria de Navidades en Halle',
                                    'Noviembre 2020 Artículo sobre parque de esculturas Pavel Miguel INKA art-magazine',
                                    'Enero 2021 Artículo sobre mi expo en Grötzinger Rastube de la revista Grötzinger actual'],
                                actual: ['Aktuelles',
                                    'Oktober 2020 - „Menschenrechte- Presse- und Meinungsfreiheit“ – Aufbau meiner Ausstellung bei der Café Grundrecht in der Karlsruher Innensdtadt',
                                    'Oktober 2020 – Ausstellung „Menschenrechte- Presse- und Meinungsfreiheit“ in der Café Grundrecht in Karlsruhe',
                                    'November 2020 – Offene Ateliers: mein eigenes Skulpturen Park',
                                    'November 2020 – Montage von meiner Skulptur „Aus eigenen Antrieb”, Karlsruhe-Durlach',
                                    'Januar 2021, „Heimat“ - Aufbau den Reliefs bei Grötzinger Raststube',
                                    'Januar 2021 Ausstellung „Heimat“. Restaurant Grötzinger Raststube',
                                    'Januar 2021 2020/2021 Kunst während Corona'],
                                    offentliche: ['Padre e hijo', 'La Madonna de Söllingen', 'La Danza', 'The big swimmer', 'Zappa', 'sag mir was du isst...'],
                                    skulpturen: ['El mudo', 'La guerra de mierda', 'Preguntas a Dios', 'Fuck corona', 'Yo amo mi trabajo', 'Lo mejor de mi', 'Batalla contra la obscuridad',
                                        'La bestia y la rebestia', 'La Tierra vista por Dios', 'Pansandor', 'Fuck corona 2', 'Atlas', 'Cabeza antivirus', 'Europastillas', 
                                        'En busca del tiempo perdido', 'Frutas policromas 1', 'Frutas policromas 2', 'Frutas policromas 3', 'Ideas fijas', 'zócalo de la cutlura', 'el soñador', 
                                        'iglesia', 'Pez naranja', 'Tiburon Martillo', 'wohin du gehts, gehst du mit mir'],
                                    installationen: ['Es doloroso ser heredero', 'Escaleras al cielo', 'Morir, dormir, tal vez soñar', 'No te duermas en los laureles', 'Adonde vayas, irás conmigo', 
                                        'Todo lo que tenía que saber', 'Llegó el conquistador', 'árbol', 'welcome to the machine', 'Echar raíces', 'La ola de la ilusión', 
                                        'Manatener el rumbo', 'Manatener el rumbo', 'Es doloroso ser heredero', 'Gafas contra radioactividad', 'Tenían las alas demasiado grandes',
                                        'Veneno vs Veneno', 'La perra europea', 'Sisifo', 'Que es lo que queda?', 'Nietzsche', 'Dostojewski', 'Hesse'],
                                    malerei: ['Cielo para topos', 'Sol', 'El barco ebrio', 'Timonel', 'Calyoncillos en el cielo', 'La casa en el fin del mondo', 'Reflejo',
                                        'Heavy metal', 'Sardina atomica', 'Atún', 'Dorada', 'Barracuda', 'Sueño', 'Oasis', 'Zo sin desayunar', 'Buey', 'El mudo',
                                        'Serie negra', 'paisaje', 'La puerta a la eternidad'],
                                    zeichnung: ['Caníbales', 'Dostojewski', 'Hesse', 'Baudelaire', 'Camus', 'contra radioactividad', 'Nuevo existencia', 'Reflejo', 'Echar raíces', 
                                        'Pipi se', 'Yo amo mi trabajo', 'barca', 'tiburón', 'Adonde vayas, irás conmigo'],
                                    performance: ['2020 Mannheim', 'Fiesta Lidellplatz, 2015', 'peformance, Hockenheim, 2020', 'Pfinzal, 2014'],
                                lang: 'es',
                            })
                        }
                        else {
                            this.setState({
                                menu: ['Menü', 'Home', 'Werke', 'Vita', 'Aktuelles', 'Presse', 'Kontakt'],
                                galleries: ['Öffentliche Werke', 'Skulpturen', 'Installationen', 'Malerei', 'Zeichnungen', 'Performance'],
                                press: ['Presse',
                                    'Mehr info', 
                                    'Oktober 2020 Bericht von meiner Ausstellung in der Cafe Grundrecht in Karlsruher Innenstadt',
                                    'Oktober 2020 Bericht von meiner Ausstellung in Rahmen von dem Jubiläum „30 Jahre Wiedervereinigung Deutschlands“',
                                    'November 2020, Weihnachtsmarkt in Halle an der Saale mit meinem Relief',
                                    'November 2020, INKA Kunstmagazin schreibt über meine Skulpturen Park',
                                    'Januar 2021 Grötzinger Raststube. Bericht von der Ausstellung, Grötzinger Aktuell'],
                                actual: ['Aktuelles',
                                    'Oktober 2020 - „Menschenrechte- Presse- und Meinungsfreiheit“ – Aufbau meiner Ausstellung bei der Café Grundrecht in der Karlsruher Innensdtadt',
                                    'Oktober 2020 – Ausstellung „Menschenrechte- Presse- und Meinungsfreiheit“ in der Café Grundrecht in Karlsruhe',
                                    'November 2020 – Offene Ateliers: mein eigenes Skulpturen Park',
                                    'November 2020 – Montage von meiner Skulptur „Aus eigenen Antrieb”, Karlsruhe-Durlach',
                                    'Januar 2021, „Heimat“ - Aufbau den Reliefs bei Grötzinger Raststube',
                                    'Januar 2021 Ausstellung „Heimat“. Restaurant Grötzinger Raststube',
                                    'Januar 2021 2020/2021 Kunst während Corona'],
                                offentliche: ['Vater und Sohn', 'Madonna aus Söllingen', 'Tänzer', 'Grosser Schwimmer', 'Zappa', 'sag mir was du isst...'],
                                skulpturen: ['der stummemann', 'Scheiss Krieg', 'fragen an Gott', 'fuck corona', 'ich liebe meiner Job', 'Meine bessere Seite (2)', 'Kampf gegen die Dunkelheit',
                                    'die Bestie und die Megabestie', 'die Erde auf dem Sicht Gottes', 'Denker', 'fuck corona 2', 'Atlas', 'Antiviruskopf', 'Eurotabletten', 
                                    'auf der Suche nach verlorenen Zeit', 'bunte obst1', 'bunte obst2', 'bunte obst3', 'Feste Ideen', 'der Zockel der Kultur', 'der Träumer', 
                                    'Kirche', 'orange Fisch', 'Hammerhai', 'wohin du gehts, gehst du mit mir'],
                                installationen: ['es ist schmerzhaft Erbe zu sein', 'Himmelsleiter', 'mein Heimat', 'auf dem Lorbeeren ausruhen', 'wohin du geht’s, gehst du mit mir', 
                                    'alles was ich wissen sollte', 'der Eroberer kommt', 'Bäume', 'welcome to the machine', 'Wurzeln schlagen', 'die Welle der Illusion', 
                                    'dein Kurs bestimmen (dieselbe)', 'dein Kurs bestimmen', 'es ist schmerzhaft erbe zu sein2', 'Brille gegen radioaktivität', 'sie hatten zu große Flügel',
                                    'gift vs. gift', 'europäische Hündin', 'sisyphus', 'Was bleibt?', 'Nietzsche', 'Dostojewski', 'Hesse'],
                                malerei: ['Himmel für Maulwürfe', 'Sonne', 'Der trunkene Schiff', 'Steuermann', 'Unterhose in der Himmel', 'Das Haus am Ende der Welt', 'Spiegelung',
                                    'Heavy metal', 'Atomische Sardellen', 'Tunfisch', 'Goldbrasse', 'Barrakuda', 'Traum', 'Oase', 'Ich ohne Frühstück', 'Osche', 'Stummeman',
                                    'Schwarze Serie', 'Landschaft', 'Die Tür zur Ewigkeit'],
                                zeichnung: ['Kannibalen', 'Dostojewski', 'Hesse', 'Baudelaire', 'Camus', 'Gegen Radioaktivität', 'Neues Leben', 'Spiegelung', 'Wurzelschlagen', 
                                    'pipimann', 'ich liebe meine Arbeit', 'boot', 'hai', 'Auf den Lorbeeren ausruhen'],
                                performance: ['2020 Mannheim', 'Lidellplatzfest, 2015', 'peformance, Hockenheim, 2020', 'Pfinzal, 2014'],
                                lang: 'de',
                            })
                        }
                    }
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider