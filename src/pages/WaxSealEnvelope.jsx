import { useState, useEffect } from 'react'
import weddingImage from '../assets/we_1.jpg'
import sectionBg1 from '../assets/location_1.jpg'
import './WaxSealEnvelope.css'

function WaxSealEnvelope() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4800)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <>
    {/* Hidden SVG filter definitions — paper grain noise */}
    <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
      <defs>
        <filter id="envelope-noise" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
          <feComponentTransfer in="blended">
            <feFuncA type="linear" slope="1" />
          </feComponentTransfer>
        </filter>
        <filter id="envelope-noise-fine" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
          <feComponentTransfer in="blended">
            <feFuncA type="linear" slope="1" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>

    <div className="envelope-overlay">

      {/* Layer 1: envelope back — behind the card */}
      <div className="envelope-shell envelope-back-scene">
        <div className="envelope-back" />
      </div>

      {/* Layer 2: the greeting card — sits between back and front */}
      <div className="envelope-card" style={{ backgroundImage: `url(${sectionBg1})` }}>
        <div className="v2-section-inner">
          <p className="v2-greeting-label">Запрошення на весілля</p>
          <h1 className="v2-greeting-title">Ми одружуємося</h1>
          <div className="v2-greeting-divider" aria-hidden="true" />
          <p className="v2-greeting-date">16 серпня 2026 року</p>
          <div className="v2-greeting-photo-wrap">
            <img src={weddingImage} alt="Світлана та Андрій" className="v2-greeting-photo" />
          </div>
          <h2 className="v2-greeting-names">Світлана та Андрій</h2>
          <p className="v2-greeting-tagline">Разом назавжди</p>
          <p className="v2-greeting-text">
            З великою радістю та теплом запрошуємо вас розділити з нами цей особливий день. Ваша присутність наповнить наше свято щирістю та радістю — ми дуже чекаємо на вас.
          </p>
        </div>
      </div>

      {/* Layer 3: envelope front + flap — covers card until it slides out */}
      <div className="envelope-shell envelope-front-scene">
        <div className="envelope-front" />
        <div className="envelope-flap">
          <div className="wax-seal">
            <span className="seal-monogram">С&thinsp;&amp;&thinsp;А</span>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default WaxSealEnvelope
