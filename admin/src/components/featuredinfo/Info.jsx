import React from 'react'
import"./info.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
const Info = () => {
  return (
    <div className='info'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,1124</span>
                <span className="featuredMoneyRate">-11.4
                <FontAwesomeIcon icon={faArrowDown} className='feturedIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">
            Compared to last month
            </span>  
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Selas</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5,1124</span>
                <span className="featuredMoneyRate">-1.4
                <FontAwesomeIcon icon={faArrowDown} className='feturedIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">
            Compared to last month
            </span>  
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,1724</span>
                <span className="featuredMoneyRate">+5.4
                <FontAwesomeIcon icon={faArrowUp} className='feturedIcon'/>
                </span>
            </div>
            <span className="featuredSub">
            Compared to last month
            </span>  
        </div>
    </div>
  )
}

export default Info