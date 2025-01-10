import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import About from './screens/About';
import Products from './screens/Products';
import Services from './screens/Services';
import Solutions from './screens/Solutions';
import Insights from './screens/Insights';
import Careers from './screens/Careers';
import Partners from './screens/Parterns';
import Contact from './screens/Contact';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/services' element={<Services />}  />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
