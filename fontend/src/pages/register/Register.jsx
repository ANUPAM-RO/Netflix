import React from 'react'
import { Link } from 'react-router-dom';
import {useRef, useState} from 'react';
import "./register.scss"
const Register = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const emailRef = useRef()
  const passRef = useRef()
  const handleStart =()=>{
    setEmail(emailRef.current.value)
  }
  const handleFinish =()=>{
    setPass(passRef.current.value)
  }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className='logo' alt="" />
                  <button className="signInButton"><Link to="/login" className='link'>Sign In</Link>  </button>
              </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, Tv Shows and more</h1>
            <h2>Watch anywhere, Cancle anything.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ? (
            <div className="input">
            <input type="email" placeholder='Email address' ref={emailRef}/>
            <button className="registerButton" onClick={handleStart}>Get Start</button>
        </div>


  ):(
        <form className="input">
            <input type="password" placeholder='password' ref={passRef}/>
         <button className="registerButton" onClick={handleFinish}><Link to =  "/login" className='link' >Start</Link> </button>  
        </form>
      )}
       </div>
    </div>
    
  )}

export default Register;