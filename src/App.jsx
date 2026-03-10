import { useEffect } from 'react'
import Hero from './components/Hero'
import Calendar from './components/Calendar'
import Timeline from './components/Timeline'
import Location from './components/Location'
import DressCode from './components/DressCode'
import Signature from './components/Signature'
import './App.css'

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, { threshold: 0.1 })

    revealElements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Hero />
      <Calendar />
      <Timeline />
      <Location />
      <DressCode />
      <Signature />
    </div>
  )
}

export default App
