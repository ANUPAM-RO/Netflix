import React from 'react'
import "./watch.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <FontAwesomeIcon icon={faArrowLeft}/>
            Home
        </div>
        <video className='video' autoPlay progress controls 
        src="Badshah - Jugnu (Official Video) - Nikhita Gandhi - Akanksha Sharma.mp4"/>
    </div>
  )
}

export default Watch