import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Work from '../components/Work'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Work/>
      <Footer/>
    </div>
  )
}
