import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import AboutContent from '../components/AboutContent'
export default function About() {
  return (
    <div> 
      <Navbar/>
      <Hero2 heading="ABOUT" titleText="About Our Company"/>
      <AboutContent/>

    <Footer/>
    </div>
  )
}
