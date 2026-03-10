import './DressCode.css'

function DressCode() {
  const colors = [
    { hex: '#f5ede1' },
    { hex: '#dfc5b5' },
    { hex: '#d9b3a1' },
    { hex: '#a89a8a' },
    { hex: '#8b7d73' },
    { hex: '#7a8a6f' },
  ]

  return (
    <section className="dress-code scroll-reveal">
      <div className="container">
        <h2 className="dress-code-title">Палітра для нашого дня</h2>
        
        <p className="dress-code-subtitle">
          Щоб наш день був на одній хвилі, просимо одяг у нейтральних тонах
        </p>

        <div className="colors-row">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-swatch"
              style={{ 
                backgroundColor: color.hex,
                animationDelay: `${index * 0.08}s`
              }}
              title={color.hex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DressCode
