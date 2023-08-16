import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getUserDetails, profileUpdate } from "../services/allApis";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { editContext } from "../components/ContextShare";

const EditProfile = () => {
const navigate=useNavigate()
  //own context to share data
  const {editDetails,setEditDetails}=useContext(editContext)
  const {id}=useParams()
  const [showSpinner, setShowSpinner] = useState(true);

  const [input,setInput]=useState({
    fname:"",
    email:"",
    mobile:"",
    address:""
  })

  console.log(input);

  const getUser = async () => {
    const {data} = await getUserDetails(id);
    setInput(data)
  
  }

  const handleChange=(e)=>{
    const {name,value}=e.target
    setInput({...input,[name]:value})
  }

  const [profileImage,setProfileImage]=useState("")

  const profileChange=(e)=>{
    setProfileImage(e.target.files[0])
  }

  console.log(profileImage);

const updateProfile=async ()=>{
  const { fname, email, mobile, address } = input;
  const headerConfig = {
    "Content-Type": "multipart/form-data",
  };
  const data = new FormData();
      data.append("user_profile", profileImage);
      data.append("fname", fname);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("address", address);
    if (fname === "") {
      toast.error("Username required");
    } else if (email === "") {
      toast.error("Email required");
    } else if (mobile === "") {
      toast.error("Mobile required");
    } else if (address === "") {
      toast.error("address required");
    }else if (profileImage === "") {
      toast.error("File required");
    } else{
      const response=await profileUpdate(id,data,headerConfig)
      console.log(response);
      if(response.status===200){
        setEditDetails(response)
        navigate(`/login/user_dashboard/${response.data._id}`)

      }
    }
}

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
    getUser()
  },[]);
  return (
    <div className="pb-5">
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
        <div className="login-box container mt-5 mb-5 p-5" style={{ width: "450px" }}>
          <form>
            <div className="user-box">
              <input type="text" name="fname" required="" value={input.fname} onChange={handleChange} />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input type="text" name="email" required="" value={input.email} onChange={handleChange}/>
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="text" name="mobile" required="" value={input.mobile} onChange={handleChange}/>
              <label>Mobile</label>
            </div>
            <div className="user-box">
              <input type="text" name="address" required="" value={input.address} onChange={handleChange}/>
              <label>Address</label>
            </div>
            <div className="user-box">
              <input type="file" name="user_profile" required="" onChange={profileChange}/>
              <label>Profile</label>
            </div>
            <center>
              <a type="submit" onClick={updateProfile}>
                Update
                <span></span>
              </a>
            </center>
          </form>
        </div>
      )}
      <ToastContainer position="top-center"/>
    </div>
  );
};

export default EditProfile;
