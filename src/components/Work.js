import React from 'react'
import './WorkCard.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'
import { NavLink } from 'react-router-dom'
export default function Work() {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Project</h1>
        <div className='project-container'>
            {WorkCardData.map((val,ind)=>{
                return(
                    <WorkCard key={ind} 
                    title={val.title} 
                    description={val.description} 
                    imagesSrc={val.imagesSrc} 
                    view={val.view}/>
                )
            })}
        </div>
    </div>
  )
}
