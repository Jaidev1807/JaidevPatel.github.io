import React from 'react'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'

export default function Gallery() {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="GALLERY" titleText="Some of Our Picture"/>
      <Footer/>
    </div>
  )
}
