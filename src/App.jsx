import './App.css'
import './assets/css/tailwind.css'
import AvailableProperties from './components/AvailableProperties'
import Contact from './components/Contact'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AvailableProperties />


      <Contact />
    </>
  )
}

export default App;