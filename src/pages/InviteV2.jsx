import { FaHeart, FaUtensils, FaMusic, FaStar } from 'react-icons/fa'
import WaxSealEnvelope from './WaxSealEnvelope'
import weddingImage from '../assets/we_1.jpg'
import sectionBg1 from '../assets/location_1.jpg'
import sectionBg2 from '../assets/location_2.jpg'
import sectionBg3 from '../assets/location_4.PNG'
import sectionBg4 from '../assets/location_5.jpg'
import './InviteV2.css'

const PALETTE = [
  { hex: '#f5ede1' },
  { hex: '#dfc5b5' },
  { hex: '#d9b3a1' },
  { hex: '#a89a8a' },
  { hex: '#8b7d73' },
  { hex: '#7a8a6f' },
]

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Forest+House+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9D%D0%BE%D0%B2%D0%B0+4+%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%96%D0%BB%D0%BA%D0%B0+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+81164'

const EVENTS = [
  { time: '14:00', title: 'Церемонія', icon: FaHeart, description: 'Чуттєві слова та приємна музика', color: '#dfc5b5' },
  { time: '15:30', title: 'Бенкет', icon: FaUtensils, description: 'Смачна їжа та спілкування', color: '#d9b3a1' },
  { time: '20:00', title: 'Танці й розваги', icon: FaMusic, description: 'Найзаповітніші моменти вечора', color: '#a89a8a' },
  { time: '22:00', title: 'Завершення', icon: FaStar, description: 'Теплі слова на прощання', color: '#8b7d73' },
]

function InviteV2() {
  return (
    <>
    <WaxSealEnvelope />
    <div className="invite-v2">
      <section className="v2-section v2-greeting" id="v2-greeting" style={{ backgroundImage: `url(${sectionBg1})` }}>
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
      </section>

      <section className="v2-section v2-date-place" id="v2-date-place" style={{ backgroundImage: `url(${sectionBg2})` }}>
        <div className="v2-section-inner">
          <h2 className="v2-heading">Дата та місце</h2>
          <div className="v2-calendar-block">
            <p className="v2-calendar-month">Серпень 2026</p>
            <p className="v2-calendar-day">16</p>
            <p className="v2-calendar-weekday">неділя</p>
          </div>
          <p className="v2-date-note">Саме в цей день ми обміняємося обітницями</p>
          <div className="v2-address-block">
            <h3 className="v2-venue">Forest Event House</h3>
            <p className="v2-venue-desc">Затишний заклад серед природи, ідеальний для нашого свята</p>
            <p className="v2-address-line">вулиця Нова, 4</p>
            <p className="v2-address-line">Новосілка, Львівська область 81164</p>
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

      <section className="v2-section v2-dresscode" id="v2-dresscode" style={{ backgroundImage: `url(${sectionBg3})` }}>
        <div className="v2-section-inner">
          <h2 className="v2-heading">Палітра для нашого дня</h2>
          <p className="v2-dresscode-subtitle">
            Щоб наш день був на одній хвилі, просимо одяг у нейтральних тонах. Оберіть будь-який відтінок з палітри — він чудово підійде.
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

      <section className="v2-section v2-schedule" id="v2-schedule" style={{ backgroundImage: `url(${sectionBg4})` }}>
        <div className="v2-section-inner">
          <h2 className="v2-heading">Розклад дня на локації</h2>
          <p className="v2-schedule-intro">Ось як ми плануємо провести день разом з вами — від церемонії до теплого прощання.</p>
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
          <p className="v2-schedule-outro">Чекаємо на вас із нетерпінням!</p>
        </div>
      </section>
    </div>
    </>
  )
}

export default InviteV2
