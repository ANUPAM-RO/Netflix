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
        src="Badshah - Jugnu (Official Video) - Nikhita Gandhi - Akanksha Sharma.mp4"/>
    </div>
  )
}

export default Watch