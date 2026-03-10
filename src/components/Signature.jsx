import './Signature.css'
import weddingImage2 from '../assets/we_2.jpg'

function Signature() {
  return (
    <section className="signature scroll-reveal">
      <div className="container">
        <div className="signature-wrapper">
          <div className="signature-header">
            <p className="signature-greeting">Дякуємо!</p>
            <h2 className="signature-main">Ми з нетерпінням чекаємо на вас</h2>
          </div>

        <div className="signature-image-section">
          <img src={weddingImage2} alt="Світлана та Андрій" className="signature-image" />
        </div>

        </div>


        <div className="signature-closing">
          <p className="closing-message">
            Ваша присутність — наша найбільша радість.
          </p>
        </div>
      </div>
          <div className="heart-animation">
            <div className="heart"></div>
          </div>
    </section>
  )
}

export default Signature
