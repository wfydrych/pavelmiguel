import React, {Component} from 'react'
import Context from './Context';

class Provider extends Component {
    state = {
        menu: ['Menü', 'Home', 'Werke', 'Vita', 'Aktuelles', 'Presse', 'Kontakt'],
        lang: 'de'
    };

    render() {
        return (
            <Context.Provider
                value={{
                    menu: this.state.menu,
                    lang: this.state.lang,
                    changeLang: lang => {
                        if (lang === 'en') {
                            this.setState({
                                menu: ['Menu', 'Home', 'Work', 'Vita', 'Actual', 'Presse', 'Contact'],
                                lang: 'en',
                            })
                        }
                        else if (lang === 'es') {
                            this.setState({
                                menu: ['Menu', 'Home', 'Werke', 'Vita', 'Aktuelles', 'Presse', 'Kontakt'],
                                lang: 'es',
                            })
                        }
                        else {
                            this.setState({
                                menu: ['Menü', 'Home', 'Werke', 'Vita', 'Aktuelles', 'Presse', 'Kontakt'],
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