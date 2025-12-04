import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import { About } from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/services' Component={Services} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </>
  )
}

export default App;