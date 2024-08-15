import imgSideLeft from '../public/images/bg-main-desktop.png'
import imgCardFront from '../public/images/bg-card-front.png'
import imgCardBack from '../public/images/bg-card-back.png'
import cardLogo from '../public/images/card-logo.svg'

import './App.css'

function App() {

  function menssageFault1() {
    const blockCardholderName = document.getElementById('CardHolderName')
    const messageError1 = document.getElementById('messageError1')

    blockCardholderName.addEventListener('blur', function () {
      if (blockCardholderName.value.trim() === '') {
        blockCardholderName.style.border = '2px solid red'
        messageError1.style.display = 'block'
      }

      blockCardholderName.addEventListener('input', function () {
        if (blockCardholderName.value.trim() !== '') {
          blockCardholderName.style.border = ''
          messageError1.style.display = 'none'
        }
      })
    })
  }

  function messageFault2() {
    const cardNumber = document.getElementById('CardNumber')
    const messageError2 = document.getElementById('menssageError2')

    cardNumber.addEventListener('blur', function () {
      if (cardNumber.value.trim() === '') {
        cardNumber.style.border = '2px solid red'
        messageError2.style.display = 'block'
      }
    })

    cardNumber.addEventListener('input', function () {
      if (cardNumber.value.trim() !== '') {
        cardNumber.style.border = ''
        messageError2.style.display = 'none'
      }
    })
  }

  function messageFault3() {
    const inputMonth = document.getElementById('inputMonth')
    const inputYear = document.getElementById('inputYear')
    const inputCVC = document.getElementById('inputCVC')
    const messageError3 = document.getElementById('messageError3')

    // Message Error of the month

    inputMonth.addEventListener('blur', function () {
      if (inputMonth.value.trim() === '') {
        inputMonth.style.border = '2px solid red'
        messageError3.style.visibility = 'visible'
      }
    })

    inputMonth.addEventListener('input', function() {
      if(inputMonth.value.trim() !== '') {
        inputMonth.style.border = ''
        messageError3.style.visibility = 'hidden'
      }
    })

    //End Message Error Month

    // Message Error of the year

    inputYear.addEventListener('blur', function() {
      if(inputYear.value.trim() === '') {
        inputYear.style.border = '2px solid red'
        messageError3.style.visibility = 'visible'
      }
    })

    inputYear.addEventListener('input', function() {
      if(inputYear.value.trim() !== ''){
        inputYear.style.border = ''
        messageError3.style.visibility = 'hidden'
      }
    })

    // End Message Error Year

    // Message Error of the CVC

    inputCVC.addEventListener('blur', function() {
      if(inputCVC.value.trim() === '') {
        inputCVC.style.border = '2px solid red'
        messageError3.style.visibility = 'visible'
      }
    })

    inputCVC.addEventListener('input', function() {
      if(inputCVC.value.trim() !== ''){
        inputCVC.style.border = ''
        messageError3.style.visibility = 'hidden'
      }
    })

    // End Message Error CVC
  }

  function checkInputs() {
    const button = document.getElementById('button')
    
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
              <span id='messageError1' className='messageError1'>Can't be blank</span>
            </div>

            <div className='elements'>
              <i>CARD NUMBER</i>
              <input type="text" placeholder='e.g 1234 5678 9123 0000' id='CardNumber' onClick={messageFault2} />
              <span id='messageError2' className='messageError2'>Wrong format, numbers only</span>
            </div>

            <div className='elementsCodes'>
              <i className='expDate'>EXP.DATE (MM/YY)</i>
              <i className='cvc'>CVC</i>

              <div className='inpuCodes'>
                <input id='inputMonth' className='inputMonth' type="text" placeholder='MM' onClick={messageFault3}/>
                <input id='inputYear' className='inputYear' type="text" placeholder='YY' onClick={messageFault3}/>
                <input id='inputCVC' className='inputCVC' type="text" placeholder='e.g.123' onClick={messageFault3}/>
              </div>
            </div>

            <span id='messageError3' className='messageError3'>Can't be blank</span>

            <button id='button' className='button' onClick={checkInputs}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
