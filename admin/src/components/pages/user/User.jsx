import React from 'react'
import "./user.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLocation, faPhone, faUpload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to ="/newuser">
            <button className='userAddButton'>Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="userShowImg"/>
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Suman Biswas</span>
                        <span className="userShowUserTitle">Web Devoloper</span>
                    </div>
                </div>
                <div className="userShowButtom">
                    <span className="userShowTitle">Accout Details</span>
                    <div className="userShowInfo">
                        <FontAwesomeIcon icon={faUser} className='userShowicon' />
                        <span className="userShowInfoTitle">sumanbhai33</span>
                    </div>
                    <div className="userShowInfo">
                        <FontAwesomeIcon icon={faCalendar} className='userShowicon' />
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <FontAwesomeIcon icon={faPhone} className='userShowicon' />
                        <span className="userShowInfoTitle">+91 8250217470</span>
                    </div>
                    <div className="userShowInfo">
                        <FontAwesomeIcon icon={faEnvelope} className='userShowicon' />
                        <span className="userShowInfoTitle">suman1234@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <FontAwesomeIcon icon={faLocation} className='userShowicon' />
                        <span className="userShowInfoTitle">Kolkata, India</span>
                    </div>

                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForms">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='sumanbhai33' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder='Suman Biswas' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder='suman1234@gmail.com' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder='+91 8250217470' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder='Kolkata, India' className='userUpdateInput'/>
                            </div>
                        </div>
                        <div className="userUpdateright">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='userUpdateImg'/>
                                <label htmlFor="file"><FontAwesomeIcon icon={faUpload} className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                        </form>
              
            </div>
        </div>
    </div>
  )
}

export default User