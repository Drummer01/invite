import { useMemo, useState, useRef, useCallback } from 'react'
import Lottie from 'lottie-react'
import FsLightbox from 'fslightbox-react'
import { FaHeart, FaUtensils, FaMusic, FaStar, FaPlay, FaPause } from 'react-icons/fa'
import { BsCake } from 'react-icons/bs'
import loveLetter from './assets/LoveLetter.json'
import weddingImage from './assets/we_3.jpg'
import weddingImage2 from './assets/we_1.jpg'
import bg from './assets/background.jpg'
import sectionBg1 from './assets/location_1.jpg'
import sectionBg2 from './assets/location_2.jpg'
import sectionBg3 from './assets/location_4.PNG'
import sectionBg4 from './assets/location_5.jpg'
import music from './assets/music.mp4'
import './pages/InviteV2.css'

const PALETTE = [
  { hex: '#f6efe7' },
  { hex: '#ead8c8' },
  { hex: '#d8c2b2' },
  { hex: '#b8c4b1' },
  { hex: '#8fa18c' },
  { hex: '#ecd6db' },
  { hex: '#e1e8f2' },
  { hex: '#5c677a' },
]

const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Forest+House+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9D%D0%BE%D0%B2%D0%B0+4+%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%96%D0%BB%D0%BA%D0%B0+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+81164'

const EVENTS = [
  { time: '14:00', title: 'Церемонія', icon: FaHeart, description: 'Чуттєві слова та приємна музика', color: '#dfc5b5' },
  { time: '15:30', title: 'Бенкет', icon: FaUtensils, description: 'Смачна їжа та спілкування', color: '#d9b3a1' },
  { time: '20:00', title: 'Торт', icon: BsCake, description: 'Найзаповітніші моменти вечора', color: '#a89a8a' },
  { time: '22:00', title: 'Завершення', icon: FaStar, description: 'Теплі слова на прощання', color: '#8b7d73' },
]

const LOCATION_GALLERY = [
  { src: sectionBg1, alt: 'Forest Event House — панорама 1' },
  { src: sectionBg2, alt: 'Forest Event House — панорама 2' },
  { src: sectionBg3, alt: 'Forest Event House — панорама 3' },
]

const CALENDAR_DAYS = [
  null, null, null, null, null, 1, 2,
  3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30,
  31,
]

function App() {
  const [lightboxToggler, setLightboxToggler] = useState(false)
  const [lightboxSlide, setLightboxSlide] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const toggleMusic = () => {
    if (!audioRef.current) return;
  
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  
    setIsPlaying(!isPlaying);
  };

  const locationSources = useMemo(() => LOCATION_GALLERY.map((item) => item.src), [])

  function openLocationLightbox(index) {
    setLightboxSlide(index + 1)
    setLightboxToggler((prev) => !prev)
  }

  const handleLetterComplete = useCallback(() => {
    const container = document.querySelector('.invite-v2')
    const target = document.getElementById('v2-greeting')
    if (container && target) container.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
  }, [])

  return (
    <>
    <div className="bg-layer" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />
    <div className="invite-v2">
      <section className="v2-section envelope-section" id="v2-envelope">
        <Lottie
          animationData={loveLetter}
          loop={false}
          onComplete={handleLetterComplete}
          style={{ width: '100vw', maxWidth: '780px' }}
        />
      </section>
      <section className="v2-section v2-greeting" id="v2-greeting">
          <div className="v2-section-inner">
            <h1 className="v2-greeting-title">Ми одружуємося</h1>
            <div className="v2-greeting-divider" aria-hidden="true" />
            <div className="v2-greeting-photo-wrap">
              <img src={weddingImage} alt="Світлана та Андрій" className="v2-greeting-photo" />
            </div>
            <h2 className="v2-greeting-names">Світлана та Андрій</h2>
            <p className="v2-greeting-text">
              З великою радістю та теплом запрошуємо вас розділити з нами цей особливий день. Ваша присутність наповнить наше свято
              щирістю та радістю — ми дуже чекаємо на вас.
            </p>

            <div className="v2-music-player" onClick={toggleMusic}>
              <svg className="v2-music-text-ring" viewBox="0 0 120 120" aria-hidden="true">
                <defs>
                  <path id="music-circle-path" d="M 60,60 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                </defs>
                <text>
                  <textPath href="#music-circle-path" startOffset="0%" textLength="226" lengthAdjust="spacingAndGlyphs">
                    {"ВКЛЮЧИТИ ПІСНЮ • ВКЛЮЧИТИ ПІСНЮ • "}
                  </textPath>
                </text>
              </svg>
              <button
                className={`v2-music-btn${isPlaying ? ' is-playing' : ''}`}
                aria-label={isPlaying ? 'Вимкнути музику' : 'Включити музику'}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <video ref={audioRef} src={music} type="video/mp4" style={{ display: 'none' }} />
            </div>
          </div>
        </section>

        <section className="v2-section v2-date" id="v2-date">
          <div className="v2-section-inner">
            <h2 className="v2-heading">Дата</h2>

            <div className="v2-calendar-card">
              <div className="v2-calendar-header">
                <span className="v2-calendar-month">Серпень</span>
                <span className="v2-calendar-year">2026</span>
              </div>

              <div className="v2-calendar-grid">
                <div className="v2-calendar-weekdays">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map((day) => (
                    <span key={day} className="v2-calendar-weekday">
                      {day}
                    </span>
                  ))}
                </div>

                <div className="v2-calendar-days">
                  {CALENDAR_DAYS.map((day, index) => (
                    <div
                      key={index}
                      className={`v2-calendar-day-cell ${!day ? 'is-empty' : ''} ${day === 16 ? 'is-selected' : ''}`}
                    >
                      {day && <span>{day}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="v2-date-note">Саме в цей день ми обміняємося обітницями</p>
          </div>
        </section>

        <section className="v2-section v2-location" id="v2-location">
          <div className="v2-section-inner">
            <h2 className="v2-heading">Локація</h2>
            <p className="v2-location-intro">Місце, де ми скажемо одне одному «так».</p>

            <div className="v2-location-gallery" aria-label="Галерея локації">
              {LOCATION_GALLERY.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="v2-location-item"
                  onClick={() => openLocationLightbox(index)}
                >
                  <img src={item.src} alt={item.alt} className="v2-location-thumb" />
                </button>
              ))}
            </div>

            <div className="v2-address-block">
              <h3 className="v2-venue">Forest Event House</h3>
              <p className="v2-venue-desc">Затишний заклад серед природи, ідеальний для нашого свята</p>
              <p className="v2-address-line">вулиця Нова, 4, Новосілка, Львівська область 81164</p>
              <a
                className="v2-map-button"
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Показати на карті
              </a>
            </div>
          </div>
        </section>

        <section className="v2-section v2-dresscode" id="v2-dresscode">
          <div className="v2-section-inner">
            <h2 className="v2-heading">Палітра для нашого дня</h2>
            <p className="v2-dresscode-subtitle">
              Щоб наш день був на одній хвилі, просимо одяг у нейтральних тонах. Оберіть будь-який відтінок з палітри — він чудово
              підійде.
            </p>
            <div className="v2-colors-row">
              {PALETTE.map((color, index) => (
                <div
                  key={index}
                  className="v2-color-swatch"
                  style={{ backgroundColor: color.hex }}
                  title={color.hex}
                />
              ))}
            </div>
            <p className="v2-dresscode-note">Будь ласка, уникайте яскравих та контрастних кольорів</p>
          </div>
        </section>

        <section className="v2-section v2-schedule" id="v2-schedule">
        <div className="v2-section-inner">
          <h2 className="v2-heading">Розклад дня на локації</h2>
          {/* <p className="v2-schedule-intro">Ось як ми плануємо провести день разом з вами — від церемонії до теплого прощання.</p> */}
          <ul className="v2-events-list">
            {EVENTS.map((event, index) => {
              const Icon = event.icon
              return (
                <li key={index} className="v2-event-item" style={{ '--event-color': event.color }}>
                  <span className="v2-event-time">{event.time}</span>
                  <div className="v2-event-body">
                    <h3 className="v2-event-title">
                      <Icon className="v2-event-icon" />
                      {event.title}
                    </h3>
                    <p className="v2-event-desc">{event.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
          {/* <p className="v2-schedule-outro">Чекаємо на вас із нетерпінням!</p> */}
        </div>
      </section>


      <section className="v2-section v2-extra" id="v2-extra">
        <div className="v2-section-inner v2-extra-inner">
          <h2 className="v2-heading">Додатково</h2>
          <p className="v2-extra-text">
           Квіти швидко в’януть, а спогади залишаються.
Тому, якщо захочете зробити нам маленький подарунок, будемо раді настільній грі або пляшці улюбленого напою.
          </p>
          <FaHeart size={50} />
          {/* <div className="v2-extra-heart" aria-hidden="true" /> */}
          <p className="v2-extra-text">
Територія ресторану не має спеціальної дитячої зони, а також на ній є необгороджена водойма. Тому, якщо маєте можливість, будемо вдячні, якщо цього дня ви залишите діток вдома. Якщо ж вони будуть разом з вами — просимо не залишати їх без нагляду.
          </p>
        </div>
      </section>

        <section className="v2-section" id="v2-final">
        <div className="v2-section-inner v2-final-inner">
          <h2 className="v2-final-title">Ми чекаємо на вас!</h2>
          <div className="v2-greeting-photo-wrap">
            <img src={weddingImage2} alt="Світлана та Андрій" className="v2-greeting-photo" />
          </div>
          <p className="v2-final-greeting">З любов&apos;ю, <br /> Світлана та Андрій</p>
        </div>
      </section>

      <FsLightbox toggler={lightboxToggler} sources={locationSources} slide={lightboxSlide} />
    </div>
    </>
  )
}

export default App
