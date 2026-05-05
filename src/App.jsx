import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HowItWorks from './Components/HowItWorks'
import TrendingGoals from './Components/TrendingGoals'
import WhyChooseTripNivesh from './Components/WhyChooseTripNivesh/WhyChooseTripNivesh'
import SmartCompare from './Components/SmartCompare/SmartCompare'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import About from './Pages/About'
import WhatsAppButton from './Components/WhatsAppButton'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <TrendingGoals />
      {/* <SavingPlanSelector /> */}
      <WhyChooseTripNivesh />
      <SmartCompare />
      {/* <ConfirmSaving /> */}
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}

export default App
