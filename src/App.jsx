import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experinece from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
export const App = () => {
  return (
      <>
        <Header />
        <Nav />
        <About />
        <Experinece />
        <Portfolio />
        <Contact />
        <Footer />
      </>
  )
}

export default App