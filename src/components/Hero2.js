import React from 'react'
import './Hero2.css'
export default function Hero2({heading,titleText}) {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{titleText}</p>
        </div>
    </div>
  )
}
