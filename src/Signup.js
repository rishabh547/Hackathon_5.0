import React, { useState } from 'react'
import './Banner.css'
import './Signup.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Signup() {
    return (
        <div className="inner-container">
        <div className="header1">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <button
            type="button"
            className="login-btn"
            >Sign Up</button>
        </div>
      </div>
    );
}

export default Signup