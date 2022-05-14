import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContent.css'
import img1 from '../assets/react1.jpg'
import img2 from '../assets/react2.webp'
export default function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a React font-end developer. I Create responsive  wibsite for client. </p>
            <Link className='btn' to='/contact'>CONTACT</Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={img1} alt='Img' className='img'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={img2} alt='Img' className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}
