import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Fun from './components/Fun'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
const App = () => {


const locomotiveScroll = new LocomotiveScroll()

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Fun/>
      <Features/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
