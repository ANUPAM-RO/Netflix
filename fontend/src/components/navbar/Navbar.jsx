import React from 'react';
import { useState , useContext } from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthAction';
const Navbar = () => {

  const [isScrolled, setisScrolled] = useState(false);
  
  const { dispatch } = useContext(AuthContext)
  window.onscroll = () =>{
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return() => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled " : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <Link  to = "/" className='link'>
                <span>Home</span>
                </Link>
                <Link  to = "/series" className='link'>
                <span>Series</span>
                </Link>
                <Link  to = "/movies" className='link'>
                <span>Movies</span>
                </Link>
                <Link  to = "/" className='link'>
                <span>New and Popular</span>
                </Link>
                <Link  to = "/movies" className='link'>
                <span>My List</span>
                </Link>
                 
            </div>
            <div className="right">
            
          
            <i class="fas fa-search" ></i>
              <span>KID</span>
              <i class="fas fa-bell" ></i>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISTR4wXzwQBVqjP1EJr1IPRxNLNo_zYy98w&usqp=CAU" alt=''/>
              <div className="profile">
              <i class="fas fa-sort-down" ></i>
              <div className="options">

                <span>Settings</span>
                <Link  to = "/logout" className='link'>
                <span onClick={()=> dispatch(logout())}>Logout</span>
                </Link>
           

              </div>
              </div>
              

            </div>
        </div>

    </div>
  )};

export default Navbar;
