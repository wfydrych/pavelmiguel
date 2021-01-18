import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import Provider from './Provider'
import './Body.sass'
import Menu from './Menu'
import LeftBar from './LeftBar'
import Main from './Main'
import RightBar from './RightBar'
import Footer from './Footer'

class Body extends Component {
  state = {
    lang: 'en',
  }

  txt = {
    menu: []
  }

  setTxt(lang){
    if (lang === 'en')
    {
        this.txt.menu[0] = 'Home'
        this.txt.menu[1] = 'WerkeEN'
        this.txt.menu[2] = 'VitaEN'
        this.txt.menu[3] = 'AktuellesEN'
        this.txt.menu[4] = 'PresseEN'
        this.txt.menu[5] = 'Contact'
    }

    else if (lang === 'de')
    {
      this.txt.menu[0] = 'Home'
      this.txt.menu[1] = 'Werke'
      this.txt.menu[2] = 'Vita'
      this.txt.menu[3] = 'Aktuelles'
      this.txt.menu[4] = 'Presse'
      this.txt.menu[5] = 'Kontact'
    }

    else if (lang === 'es')
    {
      this.txt.menu[0] = 'Home'
      this.txt.menu[1] = 'WerkeES'
      this.txt.menu[2] = 'VitaES'
      this.txt.menu[3] = 'AktuellesES'
      this.txt.menu[4] = 'PresseES'
      this.txt.menu[5] = 'ContactES'
    }
  }

  handleLangClick(e){
    this.setState({
      lang: e.target.alt
    })
    this.setTxt(e.target.alt)
  }

  handleMobileMenu(){
    if (document.querySelector('.mobileMenuSlider').style.display === 'none') {
      document.querySelector('.mobileMenuSlider').style.display = 'block'
      document.querySelector('.leftbar').style.display = 'none'
    }
    else {
      document.querySelector('.mobileMenuSlider').style.display = 'none'
      document.querySelector('.leftbar').style.display = 'flex'
    }
  }

  componentWillMount(){
    this.setTxt('de')
  }

  componentDidMount(){
    if (window.innerWidth < 1001) {
      document.querySelector('.mobileMenuSlider').style.display = 'none'
    }
  }

  render() {
    return (
      <div className='page'>
        <BrowserRouter>
          <Provider>
            <Menu menu={this.txt.menu} slideMenu={this.handleMobileMenu} handleClick={this.handleLangClick.bind(this)}></Menu>
            <LeftBar></LeftBar>
            <Main></Main>
            <RightBar></RightBar>
            <Footer></Footer>
          </Provider>
        </BrowserRouter>
      </div>
    );
}}

export default Body
