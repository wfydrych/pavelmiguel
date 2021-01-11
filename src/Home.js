import React, {Fragment} from 'react'
import './Home.sass'
import homepic from './img/home.jpg'
import signature from './img/signature.png'

const Home = (props) => 
    (
    <Fragment>
        <div className='home'>
            <img src={homepic} alt='homepic' className='home__pic'/>
            <img src={signature} alt='signature' className='home__signature' />
        </div>
    </Fragment>
)

export default Home