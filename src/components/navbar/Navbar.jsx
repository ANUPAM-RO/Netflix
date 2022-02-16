import React from 'react';
import { useState } from 'react';
import "./navbar.scss";
const Navbar = () => {

  const [isScrolled , setisScrolled] = useState(false);
  window.onscroll = () =>{
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return() => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled " : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
            
          
            <i class="fas fa-search" ></i>
              <span>KID</span>
              <i class="fas fa-bell" ></i>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISTR4wXzwQBVqjP1EJr1IPRxNLNo_zYy98w&usqp=CAU"/>
              <div className="profile">
              <i class="fas fa-sort-down" ></i>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
              </div>
              

            </div>
        </div>

    </div>
  )};

export default Navbar;
