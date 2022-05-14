import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'
export default function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="CONTACT" titleText="Our Contact Details"/>
      <Form/>
      <Footer/>
    </div>
  )
}
