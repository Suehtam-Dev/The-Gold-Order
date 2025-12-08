import { useState } from "react"
import '/masterlogo.png'
import '/Cardlogo.png'
import ValidadeInput from './inputs/ValidadeInput.jsx'
import NumCartaoInput from './inputs/NumCartaoInput.jsx'
import NameCartaoInput from './inputs/NameCartaoInput.jsx'
import CVCInput from './inputs/CVCInput.jsx'

function App() {

  const [NameCartao, setNameCartao,] = useState('')
  const [NumCartao, setNumCartao] = useState('')
  const [CVC, setCVC] = useState('')
  const [flip, setFlip] = useState(false)
  const [Validade, setValidade] = useState('')
  const [Empty, setEmpty] = useState(false)



  function ConfirmButton() {
    
    if (NameCartao.length <= 2 || NumCartao.length < 19 || /[^0-9\s]/.test(NumCartao) || CVC.length != 3 ) {
      return  window.alert('Preencha todos os espaços corretamete!')
    } else{
      return window.alert('Cadastro Concluído!')
    }
  }


  return (
    <>
      <header>
        <img src="/Cardlogo.png" alt="" className="GoldOrder" />
      </header>

      <main className={`grid-card`}>

        <section className="flex-submit">
          <h4>Digite seu nome</h4>
          <NameCartaoInput NameCartao={NameCartao} setNameCartao={setNameCartao} setFlip={setFlip} flip={flip} />

          <h4>Digite o Número do cartão</h4>
          <NumCartaoInput NumCartao={NumCartao} setNumCartao={setNumCartao} setFlip={setFlip} flip={flip} />



          <h4>Digite O CVC</h4>
          <CVCInput CVC={CVC} setCVC={setCVC} setFlip={setFlip} flip={flip} />

          <h4>Digite a validade do cartão</h4>
          <ValidadeInput Validade={Validade} setValidade={setValidade} setFlip={setFlip} flip={flip}/>


          <button className={`Confirm-button`} onClick={() => { ConfirmButton()}}> Confirmar </button>

        </section>

        <div className="cartao-container">
          <div className={`cartao-inner ${flip ? "flip" : ""}`}>

            <div className="cartao-front">

              <img src="/Cardlogo.png" alt="" class="GoldOrder" />
              <img src="/marca.png" alt="" />
              <h1>{NumCartao}</h1>

              <div className="bottom-card">
                <h2>{NameCartao}</h2>
                <img src="/masterlogo.png" alt="" />
              </div>

            </div>

            <div className="cartao-back">

              <img src="/Cardlogo.png" alt="" class="GoldOrder" />
              <img src="/marca.png" alt="" />
              <h1><span className="CardBack-letter">CVC: </span>{CVC}</h1>
              <div className="bottom-card">
                <h2> <span className="CardBack-letter">Validade: </span>{Validade}</h2>

                <img src="/masterlogo.png" alt="" />
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default App