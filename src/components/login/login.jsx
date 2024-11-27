import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <h1 className="signup-title">Sign in</h1>
          <p className="signup-subtitle">Sign in to access your account</p>
        </div>
        <form className="signup-form" noValidate>
          <div className="signup-fields">
            <div className="signup-field">
              <label htmlFor="email" className="signup-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="signup-input"
              />
            </div>
            <div className="signup-field">
              <div className="signup-password-container">
                <label htmlFor="password" className="signup-label">
                  Password
                </label>
                <a href="#" className="signup-forgot-password">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="signup-input"
              />
            </div>
          </div>
          <div className="signup-actions">
            <button type="button" className="signup-button">
              Sign in
            </button>
            <p className="signup-footer">
              Don't have an account yet?{" "}
              <a href="#" className="signup-link">
                Sign up
              </a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
