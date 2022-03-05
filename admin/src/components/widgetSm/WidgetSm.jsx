import React from 'react'
import "./widgetSm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anupam Roy</span>
                    <span className="widgetSmUserTitle">Web Developer</span>
                </div>
                <button className="widgetSmButton">
                <FontAwesomeIcon icon={faEye} className="widgetSmIcon" />
                Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anupam Roy</span>
                    <span className="widgetSmUserTitle">Web Developer</span>
                </div>
                <button className="widgetSmButton">
                <FontAwesomeIcon icon={faEye} className="widgetSmIcon" />
                Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anupam Roy</span>
                    <span className="widgetSmUserTitle">Web Developer</span>
                </div>
                <button className="widgetSmButton">
                <FontAwesomeIcon icon={faEye} className="widgetSmIcon" />
                Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anupam Roy</span>
                    <span className="widgetSmUserTitle">Web Developer</span>
                </div>
                <button className="widgetSmButton">
                <FontAwesomeIcon icon={faEye} className="widgetSmIcon" />
                Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anupam Roy</span>
                    <span className="widgetSmUserTitle">Web Developer</span>
                </div>
                <button className="widgetSmButton">
                <FontAwesomeIcon icon={faEye} className="widgetSmIcon" />
                Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anupam Roy</span>
                    <span className="widgetSmUserTitle">Web Developer</span>
                </div>
                <button className="widgetSmButton">
                <FontAwesomeIcon icon={faEye} className="widgetSmIcon" />
                Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm