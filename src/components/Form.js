import React from 'react'
import './Form.css'
export default function Form() {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text"/>
            <label>Your Email</label>
            <input type="email"/>
            <label>Subject</label>
            <input type="text"/>
            <label>Message</label>
            <textarea placeholder='Type Your Massage...' rows="6"/>
            <button className='btn'>Submit</button>

        </form>
    </div>
  )
}
