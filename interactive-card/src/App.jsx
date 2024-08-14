import imgSideLeft from '../public/images/bg-main-desktop.png'
import imgCardFront from '../public/images/bg-card-front.png'
import imgCardBack from '../public/images/bg-card-back.png'
import cardLogo from '../public/images/card-logo.svg'

import './App.css'

function App() {

  return (
    <>
      <div className='general'>
        <div className='leftColum'>

          <img src={imgSideLeft} className='imgSide' />

          <div className='divImgCards'>
            <div className='divCardFront'>
              <img src={imgCardFront} className='cardFront' />
              <img src={cardLogo} className='cardLogo' />
            </div>
            <img src={imgCardBack} className='cardBack' />
          </div>
        </div>

        <div className='rightColum'>

          <div className='divForm'>

            <div className='elements'>
              <i>CARDHOLDER NAME</i>
              <input type="text" placeholder='e.g. Jane Appleseed' />
            </div>

            <div className='elements'>
              <i>CARD NUMBER</i>
              <input type="text" placeholder='e.g 1234 5678 9123 0000' />
            </div>
            
            <div className='elementsCodes'>
              <i className='expDate'>EXP.DATE (MM/YY)</i>
              <i className='cvc'>CVC</i>

              <div className='inpuCodes'>
                <input className='inputMonth' type="text" placeholder='MM'/>
                <input className='inputYear' type="text" placeholder='YY'/>
                <input className='inputCVC' type="text" placeholder='e.g.123'/>
              </div>

            </div>

            <button className='button'>Confirm</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
