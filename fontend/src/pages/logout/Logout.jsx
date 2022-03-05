import React from 'react'
import { Link } from 'react-router-dom'
import "./logout.scss"
const Logout = () => {
  return (
    <div>
        <h1  className='logout'>Thank you for visite our website!</h1>
       <button> <Link to = "/login" className='link loginlink'>visite again</Link></button>
    </div>
  )
}

export default Logout