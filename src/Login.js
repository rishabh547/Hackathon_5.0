import React from 'react'
import './Login.css'
import Card from './Card'
// import { Button } from "@material-ui/core";
// import Search from './Search';
// import { useHistory } from "react-router-dom";

function Login() {
    return (

        <div className="inner-container">
          <div className="header1">
            Login
          </div>
          <div className="box">

            <div className="input-group">
              <span htmlFor="username">Username: </span>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>

            <div className="input-group">
              <span htmlFor="password">Password:</span>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>

            <button
              type="button"
              className="login-btn">Login</button>
        </div>
        {/* <div className='wallpaper'>
          <img src="https://i.ibb.co/HGP86bN/card-wp-1.jpg"></img>
        </div> */}
      </div>
    );
}

export default Login