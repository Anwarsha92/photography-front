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
    address:"",
    email: "",
    mobile: "",
    password: "",
  });

  const [focus,setFocus]=useState(
    {
      errfname:false,
      erraddress:false,
      erremail:false,
      errmobile:false,
      errpassword:false,
    }
  )

  const inputDetails = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fname,address, email, mobile, password } = inputs;
    if (fname === "") {
      toast.error("Username required");
    } else if (email === "") {
      toast.error("Email required");
    } 
    else if (address === "") {
      toast.error("address required");
    }else if (mobile === "") {
      toast.error("Mobile required");
    } else if (password === "") {
      toast.error("Password required");
    } else {
      const response = await userRegister(inputs);
      if (response.status === 200) {
        setInputs({
          ...inputs,
          fname: "",
          address:"",
          email: "",
          mobile: "",
          password: "",
        });
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
        <div
          className="login-box container mt-3 p-3"
          style={{ width: "450px" }}
        >
          <form>
            <h3 className="text-white text-center mb-5">Register</h3>
            <div className="user-box">
              <input
                type="text"
                name="fname"
                onChange={inputDetails}
                value={inputs.fname}
                required
                onBlur={()=>setFocus({...focus,errfname:true})}
                focus={focus.errfname.toString()}
                pattern="^[a-zA-Z].{2,}"
              />
              <label>Name</label>
              <span className="error">
                <p>Name contain minimum 3 characters</p>
              </span>
            </div>
            
            <div className="user-box">
              <input
                type="text"
                name="address"
                required
                value={inputs.address}
                onChange={inputDetails}
                onBlur={()=>setFocus({...focus,erraddress:true})}
                focus={focus.erraddress.toString()}
                pattern='^[a-zA-Z].{2,}'
              />
              <label>Address</label>
              <span className="error">
                <p>address contain minimum 3 characters</p>
              </span>
            </div>
            <div className="user-box">
              <input
                type="email"
                name="email"
                onChange={inputDetails}
                value={inputs.email}
                required
                onBlur={()=>setFocus({...focus,erremail:true})}
                focus={focus.erremail.toString()}
              />
              <label>Email</label>
              <span className="error">
                <p>Enter valid email</p>
              </span>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="mobile"
                onChange={inputDetails}
                value={inputs.mobile}
                required
                onBlur={()=>setFocus({...focus,errmobile:true})}
                focus={focus.errmobile.toString()}
                pattern="^[0-9].{9,9}"
              />
              <label>Mobile</label>
              <span className="error">
                <p>Enter 10 digit mobile number</p>
              </span>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                onChange={inputDetails}
                value={inputs.password}
                required
                onBlur={()=>setFocus({...focus,errpassword:true})}
                focus={focus.errpassword.toString()}
                pattern="^[a-zA-Z0-9].{2,}"
              />
              <label>Password</label>
              <span className="error">
                <p>Password contain minimum 3 characters</p>
              </span>
            </div>
            <center>
              <button type="submit" onClick={handleSubmit}>
                Sign Up
                <span></span>
              </button>
            </center>
          </form>
          <div className="signup text-center mt-3">
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
