import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
export default function Navbar() {
    const [click,setClick] = useState(false)
    const handelClick= ()=>setClick(!click)

    const [mYcolor,setColor]=useState(false)
    const changeColor = ()=>{
        if(window.scrollY>=100){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)
  return (
    <div className={mYcolor?'header header-bg':'header'}>
        <Link to="/">
            <h1>Protfolio</h1>
        </Link>
        <ul className={click?"nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handelClick}>
            {click?(
            <FaTimes size={20} style={{color:'#fff'}}/>
            ):(
            <FaBars size={20} style={{color:'#fff'}}/>
            )}
            
        </div>
    </div>
  )
}
