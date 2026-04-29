import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HowItWorks from './Components/HowItWorks'
import TrendingGoals from './Components/TrendingGoals'
import SavingPlanSelector from './Components/SavingPlanSelector'
import WhyTripNivesh from './Components/WhyTripNivesh'
import ConfirmSaving from './Components/ConfirmSaving'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import About from './Pages/About'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <TrendingGoals />
      {/* <SavingPlanSelector /> */}
      <WhyTripNivesh />
      {/* <ConfirmSaving /> */}
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
