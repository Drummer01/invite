import './Timeline.css'
import { FaHeart, FaUtensils, FaMusic, FaStar } from 'react-icons/fa'

function Timeline() {
  const events = [
    {
      time: '14:00',
      title: 'Церемонія',
      icon: FaHeart,
      description: 'Чуттєві слова та приємна музика',
      color: '#dfc5b5'
    },
    {
      time: '15:30',
      title: 'Бенкет',
      icon: FaUtensils,
      description: 'Смачна їжа та спілкування',
      color: '#d9b3a1'
    },
    {
      time: '20:00',
      title: 'Танці й розваги',
      icon: FaMusic,
      description: 'Найзаповітніші моменти вечора',
      color: '#a89a8a'
    },
    {
      time: '22:00',
      title: 'Завершення',
      icon: FaStar,
      description: 'Теплі слова на прощання',
      color: '#8b7d73'
    }
  ]

  return (
    <section className="timeline scroll-reveal" id="timeline">
      <div className="container">
        <h2 className="timeline-title">Розклад дня на локації</h2>
        
        <div className="timeline-container">
          <div className="timeline-track"></div>
          
          {events.map((event, index) => {
            const Icon = event.icon
            return (
              <div
                key={index}
                className="timeline-event"
                style={{ '--event-color': event.color, '--delay': `${index * 0.15}s` }}
              >
                <div className="event-card">
                  <div className="time-badge">{event.time}</div>
                  <h3 className="event-title">
                    {event.title}
                    <Icon className="event-icon" />
                  </h3>
                  <p className="event-description">{event.description}</p>
                </div>
                <div className="event-dot" style={{ borderColor: event.color }}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Timeline
