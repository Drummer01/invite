import './Hero.css'
import weddingImage1 from '../assets/we_1.jpg'

function Hero() {
  return (
    <section className="hero scroll-reveal">
      <div className="container">
        <div className="hero-top-section">
          <h1 className="hero-announce">МИ ОДРУЖУЄМОСЯ</h1>

          <div className="hero-divider"></div>

          <div className="hero-date-row">
            <span className="date-left">16 серпня</span>
            <span className="date-right">2026 року</span>
          </div>
        </div>

        <div className="hero-image-full">
          <img
            src={weddingImage1}
            alt="Світлана та Андрій"
            className="hero-image"
          />
        </div>
        <h2 className="hero-names">Світлана та Андрій</h2>

        <div className="hero-bottom-section">
          <p className="hero-message">
            З великою радістю та теплом запрошуємо вас розділити з нами цей особливий день. Ваша присутність наповнить наше свято щирістю та радістю.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
