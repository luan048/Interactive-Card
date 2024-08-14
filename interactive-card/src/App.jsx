import imgSideLeft from '../public/images/bg-main-desktop.png'
import imgCardFront from '../public/images/bg-card-front.png'
import imgCardBack from '../public/images/bg-card-back.png'
import cardLogo from '../public/images/card-logo.svg'

import './App.css'

function App() {

  function menssageFault1() {
    const blockCardholderName = document.getElementById('CardHolderName')
    const menssageError1 = document.getElementById('menssageError1')

    blockCardholderName.addEventListener('blur', function() {
      if(blockCardholderName.value.trim() === '') {
        blockCardholderName.style.border = '2px solid red'
        menssageError1.style.display = 'block'
      }

      blockCardholderName.addEventListener('input', function() {
        if(blockCardholderName.value.trim() !== '') {
          blockCardholderName.style.border = ''
          menssageError1.style.display = 'none'
        }
      })
    })
  }

  function messageFault2() {
    const cardNumber = document.getElementById('CardNumber')
    const messageError2 = document.getElementById('menssageError2')

    cardNumber.addEventListener('blur', function() {
      if(cardNumber.value.trim() === '') {
        cardNumber.style.border = '2px solid red'
        messageError2.style.display = 'block'
      }
    })

    cardNumber.addEventListener('input', function() {
      if(cardNumber.value.trim() !== '') {
        cardNumber.style.border = ''
        messageError2.style.display = 'none'
      }
    })
  }

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
              <input type="text" placeholder='e.g. Jane Appleseed' id='CardHolderName' onClick={menssageFault1} />
              <span id='menssageError1' className='menssageError1'>Can't be blank</span>
            </div>

            <div className='elements'>
              <i>CARD NUMBER</i>
              <input type="text" placeholder='e.g 1234 5678 9123 0000' id='CardNumber' onClick={messageFault2} />
              <span id='menssageError2' className='menssageError2'>Wrong format, numbers only</span>
            </div>

            <div className='elementsCodes'>
              <i className='expDate'>EXP.DATE (MM/YY)</i>
              <i className='cvc'>CVC</i>

              <div className='inpuCodes'>
                <input className='inputMonth' type="text" placeholder='MM' />
                <input className='inputYear' type="text" placeholder='YY' />
                <input className='inputCVC' type="text" placeholder='e.g.123' />
              </div>
            </div>

            <span className='menssageError3'>Can't be blank</span>

            <button className='button'>Confirm</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
