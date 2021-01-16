import React, {Fragment} from 'react'
import Media from 'react-media'
import './Home.sass'
import homepic from './img/home.jpg'
import homepic_m from './img/home-mobile.jpg'

const Home = (props) => 
    (
    <Fragment>
        <div className='home'>
            <Media query={{ maxWidth: 600 }}>
                {matches =>
                 matches ? (
                    <img src={homepic_m} alt='homepic' className='home__pic'/>
                ) : (
                    <img src={homepic} alt='homepic' className='home__pic'/>
                )
            }
            </Media>
        </div>
    </Fragment>
)

export default Home