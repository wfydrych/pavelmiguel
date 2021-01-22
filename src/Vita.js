import React, {Fragment} from 'react'
import Context from './Context'
import './Vita.sass'
import Vita_EN from './Vita_EN'
import Vita_ES from './Vita_ES'
import Vita_DE from './Vita_DE'


const Vita = (props) => 
    (
    <Fragment>
        <Context.Consumer>
        { (context) => (
            <div className='vita'>
            <span className='vita__title'>Pavel Miguel</span>
            {(() => {
                switch (context.lang) {
                case 'es':   return <Vita_ES></Vita_ES>
                case 'en': return <Vita_EN></Vita_EN>
                case 'de':  return <Vita_DE></Vita_DE>
                default:      return <Vita_DE></Vita_DE>
        }
      })()}
            </div>
        )}
        </Context.Consumer>
    </Fragment>
)

export default Vita