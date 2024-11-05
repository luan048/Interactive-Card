import { useState } from 'react';
import imgSideLeft from '../public/images/bg-main-desktop.png';
import imgCardFront from '../public/images/bg-card-front.png';
import imgCardBack from '../public/images/bg-card-back.png';
import cardLogo from '../public/images/card-logo.svg';
import cardCompleted from '../public/images/icon-complete.svg';

import './App.css'

function App() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [inputMonth, setInputMonth] = useState('')
  const [inputYear, setInputYear] = useState('')
  const [inputCVC, setInputCVC] = useState('')

  const [errors, setErrors] = useState({
    cardName: '',
    cardNumber: '',
    inputMonth: '',
    inputYear: '',
    inputCVC: '',
  })

  const [showThanks, setShowThanks] = useState(false)

  const validateFields = () => {
    const newErrors = {
      cardName: cardName.trim() === '' ? "Can't be blank" : '',
      cardNumber: cardNumber.trim() === '' ? "Can't be blank" : '',
      inputMonth: inputMonth.trim() === '' ? "Can't be blank" : '',
      inputYear: inputYear.trim() === '' ? "Can't be blank" : '',
      inputCVC: inputCVC.trim() === '' ? "Can't be blank" : '',
    }

    // Atualiza o estado de setErrors com o valor que está com error
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateFields()) {
      setShowThanks(true)
    }
  }

// Funções para manipular o num no card

  const formatedCardNumber = (event) => {
    let value = event.target.value
    value = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
    setCardNumber(value)
  }

  // Funções que atualizam os campos e limpar erros ao digitar
  const handleCardNameChange = (e) => {
    setCardName(e.target.value)
    if (errors.cardName) {
      setErrors((prevErrors) => ({ ...prevErrors, cardName: '' }))
    }
  }

  const handleCardNumberChange = (e) => {
    formatedCardNumber(e)
    if (errors.cardNumber) {
      setErrors((prevErrors) => ({ ...prevErrors, cardNumber: '' }))
    }
  }

  const handleInputMonthChange = (e) => {
    setInputMonth(e.target.value)
    if (errors.inputMonth) {
      setErrors((prevErrors) => ({ ...prevErrors, inputMonth: '' }))
    }
  }

  const handleInputYearChange = (e) => {
    setInputYear(e.target.value)
    if (errors.inputYear) {
      setErrors((prevErrors) => ({ ...prevErrors, inputYear: '' }))
    }
  }

  const handleInputCVCChange = (e) => {
    setInputCVC(e.target.value)
    if (errors.inputCVC) {
      setErrors((prevErrors) => ({ ...prevErrors, inputCVC: '' }))
    }
  }

// Fim das funções para manipular num do card

  return (
    <>
      {/* Coluna a esquerda */}
      <div className="general">
        <div className="leftColum">
          <img src={imgSideLeft} className="imgSide" alt="Side background" />
          <div className="divImgCards">
            <div className="divCardFront">
              <img src={imgCardFront} className="cardFront" alt="Card front" />
              <img src={cardLogo} className="cardLogo" alt="Card logo" />
              <i className="printedCardNumber">
                {cardNumber.padEnd(16, '0').replace(/(\d{4})(?=\d)/g, '$1 ')}
              </i>
              <i className="printedName">{cardName || 'Jane Appleseed'}</i>
              <i className="printedDate">{inputMonth || '00'}/{inputYear || '00'}</i>
            </div>
            <div className="divCardBack">
              <img src={imgCardBack} className="cardBack" alt="Card back" />
              <i className="printedCVC">{inputCVC.padEnd(3, '123')}</i>
            </div>
          </div>
        </div>

        <div className="rightColum">
          {!showThanks ? (
            // Página com Formulário
            <div className="divForm" id="divForm">
              <div className="elements">
                <i>CARDHOLDER NAME</i>
                <input
                  type="text"
                  placeholder="e.g. Jane Appleseed"
                  id="CardHolderName"
                  value={cardName}
                  onChange={handleCardNameChange}
                  style={{ border: errors.cardName ? '2px solid red' : '' }}
                />
                {errors.cardName && (
                  <span id="messageError1" className="messageError1">
                    {errors.cardName}
                  </span>
                )}
              </div>

              <div className="elements">
                <i>CARD NUMBER</i>
                <input
                  type="text"
                  placeholder="e.g 1234 5678 9123 0000"
                  id="CardNumber"
                  onChange={handleCardNumberChange}
                  value={cardNumber}
                  maxLength={19}
                  style={{ border: errors.cardNumber ? '2px solid red' : '' }}
                />
                {errors.cardNumber && (
                  <span id="messageError2" className="messageError2">
                    {errors.cardNumber}
                  </span>
                )}
              </div>

              <div className="elementsCodes">
                <i className="expDate">EXP.DATE (MM/YY)</i>
                <i className="cvc">CVC</i>
                <div className="inpuCodes">
                  <input
                    id="inputMonth"
                    className="inputMonth"
                    type="text"
                    placeholder="MM"
                    value={inputMonth}
                    onChange={handleInputMonthChange}
                    maxLength={2}
                    style={{ border: errors.inputMonth ? '2px solid red' : '' }}
                  />
                  <input
                    id="inputYear"
                    className="inputYear"
                    type="text"
                    placeholder="YY"
                    value={inputYear}
                    onChange={handleInputYearChange}
                    maxLength={2}
                    style={{ border: errors.inputYear ? '2px solid red' : '' }}
                  />
                  <input
                    id="inputCVC"
                    className="inputCVC"
                    type="text"
                    placeholder="e.g.123"
                    value={inputCVC}
                    onChange={handleInputCVCChange}
                    maxLength={3}
                    style={{ border: errors.inputCVC ? '2px solid red' : '' }}
                  />
                </div>
              </div>

              {errors.inputMonth || errors.inputYear || errors.inputCVC ? (
                <span id="messageError3" className="messageError3">Can't be blank</span>
              ) : null}
              <button id="button" className="button" onClick={handleSubmit}>
                Confirm
              </button>
            </div>
          ) : (
            // Página de Agradecimento
            <div id="thanksPage" className="thanksPage">
              <div className="elements">
                <div className="divCardCompleted">
                  <img className="cardComplete" src={cardCompleted} alt="Completed icon" />
                </div>
                <p className="pCardComplete">We've added your card details</p>
                <button className="button2" onClick={() => setShowThanks(false)}>
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App;
