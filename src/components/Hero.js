import React from 'react'
import './Hero.css'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt="img"/>
        </div>
        <div className='content'>
            <p>HI, I'M A DEVELOPER</p>
            <h1>React Developer.</h1>
            <div>
                <Link className='btn' to="/project">Projects</Link>
                <Link className='btn btn-light' to="/contact">Contact</Link>
            </div>
        </div>
    </div>
  )
}
