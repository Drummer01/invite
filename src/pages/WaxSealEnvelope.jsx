import { useEffect } from 'react'
import './WaxSealEnvelope.css'

function WaxSealEnvelope() {
  useEffect(() => {
    const scrollTimer = setTimeout(() => {
      const container = document.querySelector('.invite-v2')
      const target = document.getElementById('v2-greeting')
      if (container && target) container.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
    }, 3000)
    return () => clearTimeout(scrollTimer)
  }, [])

  return (
    <section className="v2-section envelope-section" id="v2-envelope">
      {/* Layer 1: envelope back — behind the card */}
      <div className="envelope-shell envelope-back-scene">
        <div className="envelope-back" />
      </div>

      {/* Layer 3: envelope front + flap */}
      <div className="envelope-shell envelope-front-scene">
        <div className="envelope-front" />
        <div className="envelope-flap">
          <div className="wax-seal">
            <span className="seal-monogram">С&thinsp;&amp;&thinsp;А</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaxSealEnvelope
