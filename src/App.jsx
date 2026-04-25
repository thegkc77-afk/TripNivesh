import React from 'react'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HowItWorks from './Components/HowItWorks'
import TrendingGoals from './Components/TrendingGoals'
import SavingPlanSelector from './Components/SavingPlanSelector'
import WhyTripNivesh from './Components/WhyTripNivesh'
import ConfirmSaving from './Components/ConfirmSaving'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
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

export default App
