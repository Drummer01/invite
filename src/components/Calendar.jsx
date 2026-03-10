import { useEffect, useState } from 'react'
import './Calendar.css'

function Calendar() {
  const [days, setDays] = useState([])

  useEffect(() => {
    // Generate calendar for August 2026
    const year = 2026
    const month = 7 // August (0-indexed)
    const firstDayRaw = new Date(year, month, 1).getDay()
    // Convert so Monday = 0, Sunday = 6
    const firstDay = (firstDayRaw + 6) % 7
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const calendarDays = []

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(day)
    }

    setDays(calendarDays)
  }, [])

  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']

  return (
    <section className="calendar scroll-reveal">
      <div className="container">
        <h2 className="calendar-title">Календар</h2>
        
        <div className="calendar-wrapper">
          <div className="month-year">Серпень 2026</div>
          
          <div className="calendar-grid">
            <div className="weekdays">
              {dayNames.map((day) => (
                <div key={day} className="weekday">
                  {day}
                </div>
              ))}
            </div>

            <div className="days">
              {days.map((day, index) => (
                <div
                  key={index}
                  className={`day ${day === 16 ? 'wedding-day' : ''} ${day ? '' : 'empty'}`}
                >
                  {day && (
                    <>
                      {day}
                      {day === 16 && <span className="heart-icon">♥</span>}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calendar
