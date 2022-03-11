import React from "react";
import { Link, useHistory } from "react-router-dom";
import {  useState } from "react";
import "./register.scss";
import axios from "axios";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [flag , setFlag] = useState(false)
  const history = useHistory();

  const handleFinish = async (e) => {
    e.preventDefault();
   
    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (error) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            className="logo"
            alt=""
          />
         <Link to="/login" className="link">
            <a className="signInButton">Sign In</a>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, Tv Shows and more</h1>
        <h2>Watch anywhere, Cancle anything.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        { !flag ? (
          <div className="input">
            <input type="email" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value) } />
            <button className="registerButton" onClick={()=> setFlag(true)}>
              Get Start
            </button>
          </div>
        ) : (
          <form className="input">
              <input type="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPass(e.target.value)} />
            <button className="registerButton" onClick={handleFinish}>
              <Link to="/login" className="link">
                Start
              </Link>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
