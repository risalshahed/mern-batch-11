import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      {/* header */}
      <Header />
      {/* 4 pages */}
      <div className="min-h-screen">
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/services' Component={Services} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      </div>
      <Footer />
      {/* footer */}
    </>
  )
}

export default App;