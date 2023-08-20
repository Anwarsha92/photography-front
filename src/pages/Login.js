import React, { useContext, useEffect, useState } from "react";
import "../Login.css";
import { Alert, Spinner } from "react-bootstrap";
import { loginContext, registerContext } from "../components/ContextShare";
import LoadingSpinner from "../components/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogin } from "../services/allApis";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loginData, setLoginData } = useContext(loginContext);
  const { registerData, setRegisterData } = useContext(registerContext);
  const [showSpinner, setShowSpinner] = useState(true);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [focus,setFocus]=useState(
    {
      errEmail:false,
      errPassword:false
    }
  )
  const inputData = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    if (email === "") {
      toast.error("Email required");
    } else if (password === "") {
      toast.error("Password required");
    } else {
      const response = await userLogin(inputs);
      console.log(response);
      if (response.status === 200) {
        navigate(`/login/user_dashboard/${response.data._id}`);
        setLoginData(response.data);
      } else if (response.response.status === 404) {
        toast.error("Incorrect email or password");
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  });
  return (
    <div className="pb-5">
      {registerData ? (
        <Alert
          className="text-center text-white mt-2 w-50 container bg-success"
          onClose={() => setRegisterData("")}
          dismissible
        >
          {registerData.fname.toUpperCase()} Successfully Registered
        </Alert>
      ) : (
        ""
      )}
      {showSpinner ? (
        <LoadingSpinner />
      ) : (
        <div
          className="login-box container mt-5 p-5"
          style={{ width: "400px" }}
        >
          <form onSubmit={handleLogin}>
            <h3 className="text-white text-center mb-5">Login</h3>
            <div className="user-box">
              <input
                type="email"
                value={inputs.email}
                name="email"
                required
                onChange={inputData}
                onBlur={()=>setFocus({...focus,errEmail:true})}
                focus={focus.errEmail.toString()}
                
              />
              <label>Email</label>
              <span className="error">
                <p>Enter valid email </p>
              </span>
            </div>
            <div className="user-box">
              <input
                type="password"
                value={inputs.password}
                name="password"
                required
                onChange={inputData}
                onBlur={()=>setFocus({...focus,errPassword:true})}
                focus={focus.errPassword.toString()}
                pattern="^.{3,}"
              />
              <label>Password</label>
              <span className="error">
                <p>Password contain minimum 3 characters</p>
              </span>
            </div>
            <center>
              <button type="submit">
                Login
              </button>
            </center>
          </form>
          <div className="signup text-center mt-3">
            <a href="register">Not Register? Please Sign Up Here</a>
          </div>
        </div>
      )}
      <div>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default Login;
