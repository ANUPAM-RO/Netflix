import React, { useState } from 'react'
import "./listitem.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
const ListItem = ({index}) => {
  const [isHovered , setIsHovered] = useState(false);
  const tailer = 
  "Badshah - Jugnu (Official Video) - Nikhita Gandhi - Akanksha Sharma.mp4"
  return (
    <div className='listitem'
    style={{left: isHovered && index *225 - 50 + index * 2.5}}
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
    >

      <img src="https://th.bing.com/th/id/OIP.agJ8KQPxtGAISH6glBV4gAHaKj?pid=ImgDet&rs=1" alt=""/>
      {isHovered && (
          <>
          <video src={tailer} autoPlay 
           loop/>
      <div className="itemInfo">
        <div className="icons">
        <FontAwesomeIcon className = "icon" icon={faPlay} />
        <FontAwesomeIcon className = "icon" icon={faPlus} />
        <FontAwesomeIcon className = "icon" icon={faThumbsUp} />
        <FontAwesomeIcon className = "icon" icon={faThumbsDown} />

        </div>
        <div className="itemInfoTop">
          <span>1hour 20 mins</span>
          <span className='limit'>+18</span>
          <span>1998</span>

        </div>
        <div className='desc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className='genre'>Action</div>
      </div>
          </>
        )}
      
    </div>
  )
}

export default ListItem;