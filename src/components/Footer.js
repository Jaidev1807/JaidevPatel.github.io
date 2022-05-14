import React from 'react'
import './Footer.css'
import {FaHome,FaPhone,FaMailBulk,FaLinkedin,FaFacebook,FaTwitter} from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                <div>
                    <p>123 Housing Society.</p>
                    <p>Bangladesh.</p>
                </div>
                </div>
                <div className='phone'>
                 <h4>   
                <FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                1-2323-343-23</h4>
                </div>
                <div className='email'>
                 <h4>   
                <FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                myemail@email.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>This is me Saiful Islam.CEO & Founder of TechLearner.I enjoy discussing new projects and design challenges.</p>
                <div className='social'>
                <FaFacebook size={30} style={{color:'#fff',marginLeft:'1rem'}}/>
                <FaTwitter size={30} style={{color:'#fff',marginLeft:'1rem'}}/>
                <FaLinkedin size={30} style={{color:'#fff',marginLeft:'1rem'}}/>

                </div>
            </div>
        </div>
    </div>
  )
}
