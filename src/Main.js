import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import {AnimatedSwitch} from 'react-router-transition'
import Home from'./Home'
import Werke from'./Werke'
import Vita from'./Vita'
import Aktuelles from'./Aktuelles'
import Presse from'./Presse'
import Kontakt from'./Kontakt'
import Offentliche from'./Offentliche'
import Skulpturen from'./Skulpturen'
import Installationen from'./Installationen'
import Malerei from'./Malerei'
import Zeichnungen from'./Zeichnungen'
import Performance from'./Performance'
import Impressum from './Impressum'
import './Main.sass'

const Main = (props) => 
    (
    <div className='main'>
        <Switch>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <Route 
                    exact path='/' 
                    render = {text => <Home></Home>}>
                </Route>
                <Route 
                    exact path='/pavelmiguel' 
                    render = {text => <Home></Home>}>
                </Route>
                <Route 
                    path='/home' 
                    render = {text => <Home></Home>}>
                </Route>
                <Route 
                    path='/werke' 
                    render = {text => <Werke></Werke>}>
                </Route>
                <Route 
                    path='/vita' 
                    render = {text => <Vita></Vita>}>
                </Route>
                <Route 
                    path='/aktuelles' 
                    render = {text => <Aktuelles></Aktuelles>}>
                </Route>
                <Route 
                    path='/presse' 
                    render = {text => <Presse></Presse>}>
                </Route>
                <Route 
                    path='/kontakt' 
                    render = {text => <Kontakt></Kontakt>}>
                </Route>
                <Route 
                    path='/offentliche' 
                    render = {text => <Offentliche></Offentliche>}>
                </Route>
                <Route 
                    path='/skulpturen' 
                    render = {text => <Skulpturen></Skulpturen>}>
                </Route>
                <Route 
                    path='/installationen' 
                    render = {text => <Installationen></Installationen>}>
                </Route>
                <Route 
                    path='/malerei' 
                    render = {text => <Malerei></Malerei>}>
                </Route>
                <Route 
                    path='/zeichnungen' 
                    render = {text => <Zeichnungen></Zeichnungen>}>
                </Route>
                <Route 
                    path='/performance' 
                    render = {text => <Performance></Performance>}>
                </Route>
                <Route 
                    path='/impressum' 
                    render = {text => <Impressum></Impressum>}>
                </Route>
            </AnimatedSwitch>
        </Switch>
    </div>
)

export default withRouter(Main)