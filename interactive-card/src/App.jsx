import { useEffect, useState } from 'react'
import imgSideLeft from '../public/images/bg-main-desktop.png'
import imgCardFront from '../public/images/bg-card-front.png'
import imgCardBack from '../public/images/bg-card-back.png'
import cardLogo from '../public/images/card-logo.svg'

import './App.css'

function App() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [inputMonth, setInputMonth] = useState('')
  const [inputYear, setInputYear] = useState('')
  const [inputCVC, setInputCVC] = useState('')

  useEffect(() => {
    function messageFault1() {
      const blockCardholderName = document.getElementById('CardHolderName')
      const messageError1 = document.getElementById('messageError1')

      blockCardholderName.addEventListener('blur', function () {
        if (blockCardholderName.value.trim() === '') {
          blockCardholderName.style.border = '2px solid red'
          messageError1.style.display = 'block'
        }
      })

      blockCardholderName.addEventListener('input', function () {
        if (blockCardholderName.value.trim() !== '') {
          blockCardholderName.style.border = ''
          messageError1.style.display = 'none'
        }
      })
    }

    function messageFault2() {
      const cardNumber = document.getElementById('CardNumber')
      const messageError2 = document.getElementById('messageError2')

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

      inputMonth.addEventListener('input', function () {
        if (inputMonth.value.trim() !== '') {
          inputMonth.style.border = ''
          messageError3.style.visibility = 'hidden'
        }
      })

      // Message Error of the year
      inputYear.addEventListener('blur', function () {
        if (inputYear.value.trim() === '') {
          inputYear.style.border = '2px solid red'
          messageError3.style.visibility = 'visible'
        }
      })

      inputYear.addEventListener('input', function () {
        if (inputYear.value.trim() !== '') {
          inputYear.style.border = ''
          messageError3.style.visibility = 'hidden'
        }
      })

      // Message Error of the CVC
      inputCVC.addEventListener('blur', function () {
        if (inputCVC.value.trim() === '') {
          inputCVC.style.border = '2px solid red'
          messageError3.style.visibility = 'visible'
        }
      })

      inputCVC.addEventListener('input', function () {
        if (inputCVC.value.trim() !== '') {
          inputCVC.style.border = ''
          messageError3.style.visibility = 'hidden'
        }
      })
    }

    document.getElementById('button').addEventListener('click', function (event) {

      const boxCardholder = document.getElementById('CardHolderName')
      const messageError1 = document.getElementById('messageError1')

      const boxCardNumber = document.getElementById('CardNumber')
      const messageError2 = document.getElementById('messageError2')

      const inputMonth = document.getElementById('inputMonth')
      const inputYear = document.getElementById('inputYear')
      const inputCVC = document.getElementById('inputCVC')
      const messageError3 = document.getElementById('messageError3')

      //Variable to inputs
      const valueInputName = boxCardholder.value.trim()
      const valueInputNumber = boxCardNumber.value.trim()
      const valueInputMonth = inputMonth.value.trim()
      const valueInputYear = inputYear.value.trim()
      const valueInputCVC = inputCVC.value.trim()
      //End variables to inputs

      if (valueInputName === '') {
        boxCardholder.style.border = '2px solid red'
        messageError1.style.display = 'block'
        event.preventDefault()
      }

      if (valueInputNumber === '') {
        boxCardNumber.style.border = '2px solid red'
        messageError2.style.display = 'block'
        event.preventDefault()
      }

      if (valueInputMonth === '') {
        inputMonth.style.border = '2px solid red'
        messageError3.style.visibility = 'visible'
        event.preventDefault()
      }

      if (valueInputYear === '') {
        inputYear.style.border = '2px solid red'
        messageError3.style.visibility = 'visible'
        event.preventDefault()
      }

      if (valueInputCVC === '') {
        inputCVC.style.border = '2px solid red'
        messageError3.style.visibility = 'visible'
        event.preventDefault()
      }

      if(valueInputName !== '' && valueInputNumber !== '' && valueInputMonth !== '' && valueInputYear !== '' && valueInputCVC !== '') {
        const divForm = document.getElementById('divForm')

        divForm.style.display = 'none'
      }
    })

    messageFault1()
    messageFault2()
    messageFault3()

  }, [])




  function formatedCardNumber(event) {
    let value = event.target.value

    value = value.replace(/\D/g, '')

    value = value.replace(/(\d{4})(?=\d)/g, '$1 ')

    setCardNumber(value)
  }

  return (
    <>
      <div className="general">
        <div className="leftColum">
          <img src={imgSideLeft} className="imgSide" />
          <div className="divImgCards">
            <div className="divCardFront">
              <img src={imgCardFront} className="cardFront" />
              <img src={cardLogo} className="cardLogo" />
              <i className='printedCardNumber'>{cardNumber.padEnd(16, '0').replace(/(\d{4})(?=\d)/g, '$1 ')}</i>
              <i className='printedName'>{cardName || 'Jane Apllesed'}</i>
              <i className='printedDate'>{inputMonth || '00'}/{inputYear || '00'}</i>
            </div>
            <div className='divCardBack'>
              <img src={imgCardBack} className="cardBack" />
              <i className='printedCVC'>{inputCVC.padEnd(3, '123')}</i>
            </div>
          </div>
        </div>

        <div className="rightColum">

          {/* DIV to the form */}
          <div className="divForm" id='divForm'>
            <div className="elements">
              <i>CARDHOLDER NAME</i>
              <input type="text" placeholder="e.g. Jane Appleseed" id="CardHolderName" value={cardName} onChange={(e) => setCardName(e.target.value)} />
              <span id="messageError1" className="messageError1">Can't be blank</span>
            </div>

            <div className="elements">
              <i>CARD NUMBER</i>
              <input type="text" placeholder="e.g 1234 5678 9123 0000" id="CardNumber" onChange={formatedCardNumber} value={cardNumber} maxLength={19} />
              <span id="messageError2" className="messageError2">Can't be blank</span>
            </div>

            <div className="elementsCodes">
              <i className="expDate">EXP.DATE (MM/YY)</i>
              <i className="cvc">CVC</i>
              <div className="inpuCodes">
                <input id="inputMonth" className="inputMonth" type="text" placeholder="MM" value={inputMonth} onChange={(e) => setInputMonth(e.target.value)} maxLength={2}/>
                <input id="inputYear" className="inputYear" type="text" placeholder="YY" value={inputYear} onChange={(e) => setInputYear(e.target.value)} maxLength={2}/>
                <input id="inputCVC" className="inputCVC" type="text" placeholder="e.g.123" value={inputCVC} onChange={(e) => setInputCVC(e.target.value)} maxLength={3}/>
              </div>
            </div>

            <span id="messageError3" className="messageError3">Can't be blank</span>
            <button id="button" className="button">Confirm</button>
          </div>
          {/* END DIV form*/}
          
          <div className='thanksPage'></div>

        </div>
      </div>
    </>
  );
}

export default App
