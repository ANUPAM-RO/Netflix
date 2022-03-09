import React from 'react'
import "./watch.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
        <Link to ='/'> <FontAwesomeIcon icon={faArrowLeft}/> </Link>    
            Home
        </div>
       
        <video className='video' autoPlay progress controls 
        src="https://www.youtube.com/watch?v=sqmNziU3OxQ"/>
    </div>
  )
}

export default Watch