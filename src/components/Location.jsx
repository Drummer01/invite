import { useState, useMemo } from 'react'
import FsLightbox from 'fslightbox-react'
import './Location.css'
import location1 from '../assets/location_1.jpg'
import location2 from '../assets/location_2.jpg'
import location3 from '../assets/location_3.MP4'
import location4 from '../assets/location_4.PNG'
import location5 from '../assets/location_5.jpg'
import location6 from '../assets/location_6.jpg'

function Location() {
  const [lightboxToggler, setLightboxToggler] = useState(false)
  const [lightboxSlide, setLightboxSlide] = useState(1)

  const galleryItems = [
    {
      type: 'image',
      src: location1,
      alt: 'Локація 1'
    },
    {
      type: 'image',
      src: location2,
      alt: 'Локація 2'
    },
    {
      type: 'video',
      src: location3,
      alt: 'Відео локації'
    },
    {
      type: 'image',
      src: location4,
      alt: 'Локація 4'
    },
    // {
    //   type: 'image',
    //   src: location5,
    //   alt: 'Локація 5'
    // },
    // {
    //   type: 'image',
    //   src: location6,
    //   alt: 'Локація 6'
    // }
  ]

  const sources = useMemo(() => galleryItems.map(i => i.src), [galleryItems])

  function openLightbox(index) {
    setLightboxSlide(index + 1)
    setLightboxToggler(prev => !prev)
  }

  return (
    <section className="location scroll-reveal">
      <div className="container">
        <h2 className="location-title">Місце проведення</h2>

        <div className="location-info-block">
          <div className="address-info">
            <h3 className="address-heading">Forest Event House</h3>
            <p className="address-line">вулиця Нова, 4</p>
            <p className="address-line">Новосілка, Львівська область 81164</p>

            <a
              className="map-button"
              href="https://www.google.com/maps/search/?api=1&query=Forest+House+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9D%D0%BE%D0%B2%D0%B0+4+%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%96%D0%BB%D0%BA%D0%B0+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+81164"
              target="_blank"
              rel="noopener noreferrer"
            >
              Показати на карті
            </a>
          </div>
        </div>

        <div className="gallery-section">
          <h3 className="gallery-title">Галерея локації</h3>
          <div className="gallery-row">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                className={`gallery-item ${item.type === 'video' ? 'is-video' : ''}`}
                onClick={() => openLightbox(index)}
                aria-label={`Відкрити ${item.alt}`}
              >
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.alt} className="gallery-image" />
                ) : (
                  <div className="video-thumb">
                    <img src={location1} alt={item.alt} className="gallery-image" />
                    <div className="play-overlay">▶</div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <FsLightbox toggler={lightboxToggler} sources={sources} slide={lightboxSlide} />
      </div>
    </section>
  )
}

export default Location
