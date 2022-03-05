import React from 'react'
import "./topbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGear, faGlobe } from '@fortawesome/free-solid-svg-icons';
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topLeft">
                <span className="logo">Anupam</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <FontAwesomeIcon icon={faBell} className='bell' /> 
                <span className="topIconBag">2</span>
                </div>
                
                <div className="topbarIconContainer">
                <FontAwesomeIcon icon={faGlobe} className='bell' /> 
  
                <span className="topIconBag">2</span>
                </div>

                <div className="topbarIconContainer">
                <FontAwesomeIcon icon={faGear} className='bell' /> 
                </div>
               <img src="https://th.bing.com/th/id/OIP.yNEImcaINuWO8SXWEYYS-gHaF5?pid=ImgDet&w=736&h=586&rs=1" alt="" className='topImg' />
           
            </div>
        </div>

    </div>
  )
}

export default Topbar