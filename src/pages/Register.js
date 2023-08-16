import React, { useContext, useEffect, useState } from "react";
import { Alert, Form, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userRegister } from "../services/allApis";
import LoadingSpinner from "../components/LoadingSpinner";
import { registerContext } from "../components/ContextShare";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { registerData, setRegisterData } = useContext(registerContext);
  const [showSpinner, setShowSpinner] = useState(true);

  const [inputs, setInputs] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
  });

  const inputDetails = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fname, email, mobile, password } = inputs;
    if (fname === "") {
      toast.error("Username required");
    } else if (email === "") {
      toast.error("Email required");
    } else if (mobile === "") {
      toast.error("Mobile required");
    } else if (password === "") {
      toast.error("Password required");
    } else {
      const response = await userRegister(inputs);
      if (response.status === 200) {
        setInputs({...inputs,
        fname:"",
        email:"",
        mobile:"",
        password:""
        })
        setRegisterData(response.data);
        navigate("/login");
      } else if (response.response.status === 406) {
        setErrorMsg(response.response.data);
        window.scrollTo(0, 0);
      } else {
        setErrorMsg(response.code);
        window.scrollTo(0, 0);
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2500);
  });
  return (
    <div className="pb-5">
      {errorMsg ? (
        <Alert
          className="text-center mt-2 w-50 container"
          variant="danger"
          onClose={() => setErrorMsg("")}
          dismissible
        >
          {errorMsg}
        </Alert>
      ) : (
        ""
      )}
      {showSpinner ? (
        <LoadingSpinner />
      ) : (
        <div className="login-box container mt-5 p-5" style={{ width: "400px" }}>
          <form>
            <h3 className="text-white text-center mb-5">Register</h3>
            <div className="user-box">
              <input
                type="text"
                name="fname"
                onChange={inputDetails}
                value={inputs.fname}
                required=""
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="email"
                onChange={inputDetails}
                value={inputs.email}
                required=""
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="mobile"
                onChange={inputDetails}
                value={inputs.mobile}
                required=""
              />
              <label>Mobile</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                onChange={inputDetails}
                value={inputs.password}
                required=""
              />
              <label>Password</label>
            </div>
            <center>
              <a type="submit" onClick={handleSubmit}>
                Sign Up
                <span></span>
              </a>
            </center>
          </form>
          <div className="signup text-center">
            <a href="login">Already Registered? Please Login</a>
          </div>
        </div>
      )}
      <div>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default Register;
