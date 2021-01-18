import React, {Component} from 'react'
import Context from './Context';

class Provider extends Component {
    state = {
        menu: ['Menü', 'Home', 'Werke', 'Vita', 'Aktuelles', 'Presse', 'Kontakt'],
        
    };

    render() {
        return (
            <Context.Provider
                value={{
                    menu: this.state.menu,
                    changeLang: lang => {
                        if (lang === 'en') {
                            this.setState({
                                menu: ['Menu', 'Home', 'Work', 'Vita', 'Actual', 'Presse', 'Contact'],
                            })
                        }
                        else if (lang === 'es') {
                            this.setState({
                                menu: ['Menu', 'Home', 'Werke', 'Vita', 'Aktuelles', 'Presse', 'Kontakt'],
                            })
                        }
                        else {
                            this.setState({
                                menu: ['Menü', 'Home', 'Werke', 'Vita', 'Aktuelles', 'Presse', 'Kontakt'],
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