import React from "react";
import "./App.css";
import robotImg from "./robot.png"; // 👈 robot image inside src

export default function App() {
  return (
    <div className="login-container">
      {/* Wrapper keeps robot + login card centered together */}
      <div className="login-wrapper">
        
        {/* Robot beside Login Card */}
        <div className="robot-wrapper">
          <img src={robotImg} alt="Robot" className="robot-bg" />
        </div>

        {/* Login Card */}
        <div className="login-card">
          <div className="login-header">
            <h2>Hello,</h2>
            <p>Welcome to Tux8.Top</p>
          </div>

          <form>
            {/* Phone */}
            <div className="input-group">
              <span className="prefix">+63</span>
              <input type="text" placeholder="Please enter your phone number" />
            </div>

            {/* Password */}
            <div className="input-group">
              <input type="password" placeholder="Please enter your password" />
            </div>

            {/* Options */}
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              {/* Fixed href with #0 (safe placeholder) */}
              <a href="#0">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button type="submit" className="login-btn">
              Login
            </button>

            {/* Register */}
            <p className="register">
              No Account? <a href="#0">Register Now</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
