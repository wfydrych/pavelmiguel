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