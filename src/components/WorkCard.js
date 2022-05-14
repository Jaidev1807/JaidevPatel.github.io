import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom'
export default function WorkCard(props) {
  return (
    <div className='project-card'>
                <img src={props.imagesSrc} alt="Images"/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='project-details'>
                    <p>{props.description}</p>
                    <div className='project-btn'>
                        <NavLink to={props.view}className="btn">View</NavLink>
                        <NavLink to={props.view} className="btn">Source</NavLink>
                    </div>
                </div>
        </div>
  )
}
