import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./sign_in.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <div className="sign-in-container">
      <div className="form">
            <div className="sign-in-text">
                <h1>
                    Welcome
                    <br /> Back
                </h1>
                <p>
                    It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout. The point
                    of using.
                </p>
                <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        <div className="sign-in-form">
                <h3>Sign in</h3>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" value={email} placeholder="Enter your email here..." onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} placeholder="Enter your password here..." onChange={(e) => setPassword(e.target.value)}/>
                <div className="form-row">
                    <div className="remember-me">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                    </div>
                </div>
                <button className="sign-in-btn">Sign in now</button>
                <a href="#" className="lost-password">
                    Lost your password?
                </a>
                <div>
                    <p>New user? <Link to="/register" className="registeration-form">Register here</Link></p>
                </div>

        </div>
      </div>
    </div>
    </>
  );
};


export default SignIn;
