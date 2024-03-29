import React from 'react'
import "./sidebar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp,faChartLine, faHouse, faList, faMailBulk, faManatSign, faReceipt} from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile, faMessage, faPlayCircle, faUser } from '@fortawesome/free-regular-svg-icons';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Link to="/" className='link'>
                    <FontAwesomeIcon icon={faHouse} className='sidebarIcons'/>
                        Home
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon  icon={faArrowTrendUp}  className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faChartLine} className='sidebarIcons'/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link to="/users" className='link'>
                    <FontAwesomeIcon icon={faUser} className='sidebarIcons'/>
                        Users
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to="/movies" className='link'>
                    <FontAwesomeIcon icon={faPlayCircle} className='sidebarIcons'/>
                        Movies
                        </Link>
                    
                    </li>
                      <li className="sidebarListItem">
                          <Link to ="/lists" className='link'>
                    <FontAwesomeIcon icon={faList} className='sidebarIcons'/>
                              Lists
                              </Link>
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faReceipt} className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faMailBulk} className='sidebarIcons'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faFaceSmile} className='sidebarIcons'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faMessage} className='sidebarIcons'/>
                        Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                    <FontAwesomeIcon icon={faManatSign} className='sidebarIcons'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faArrowTrendUp} className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faHouse} className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar