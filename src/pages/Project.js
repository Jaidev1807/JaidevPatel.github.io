import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'
export default function Project() {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="PROJECT" titleText="Some of Our Recent Project"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}
