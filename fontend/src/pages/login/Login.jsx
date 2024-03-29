import React, { useContext, useState } from 'react'
import "./login.scss"
import { login } from '../../authContext/apiCall';
import { AuthContext } from '../../authContext/AuthContext';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching , dispatch} = useContext(AuthContext)
  const handelLogin = (e) => {
    e.preventDefault()
    login({ email, password }, dispatch)
  }
  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className='logo' alt="" />
        </div>
        </div>
        <div className="container">
            <form >
                <h1>Sign In</h1>
                <input type="email" placeholder='email or phone Number' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                <button className='loginButton' onClick={handelLogin}>Log In</button>
                <span>New to Netflix? <b>Sign up now.</b></span>
                <small>
                    This page is protected by Google reCAPTCHA  to you're not a boy. <b> Learn more</b>
                </small>
            </form>
    </div>
    </div>
  
  )
}

export default Login