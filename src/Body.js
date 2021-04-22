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
            <Menu slideMenu={this.handleMobileMenu} ></Menu>
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
