import React, { useEffect, useState } from "react";
import "../Login.css";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  });
  return (
    <div>
      {showSpinner ? (
        <div className="text-center" style={{ marginTop: "30vh" }}>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="dark" />
        </div>
      ) : (
        <div className="login-box container mt-5" style={{ width: "400px" }}>
          <form>
            <h3 className="text-white text-center mb-5">Login</h3>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <center>
              <a href="/login/user_dashboard">
                Login
                <span></span>
              </a>
            </center>
          </form>
          <div className="signup text-center">
            <a href="register">Not Register Please Sign Up Here</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
