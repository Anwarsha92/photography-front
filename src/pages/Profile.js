import React, {useContext, useEffect, useState } from "react";
import "../Profile.css";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteProfile, getUserDetails } from "../services/allApis";
import { BASE_URL } from "../services/base_url";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteContext } from "../components/ContextShare";

const Profile = () => {

  const[profileDetails,setProfileDetails]=useState("")

  //deleteContext to pass user details
  const {deleteUser,setDeleteUser}=useContext(deleteContext)


  const {id}=useParams()
  const navigate=useNavigate()
  const [showSpinner, setShowSpinner] = useState(true);
console.log(profileDetails);

const updateProfile=()=>{
navigate(`/login/user_dashboard/user_profile/user_edit/${id}`)
}



//delete confirm
const submit = () => {
  confirmAlert({
    title: 'Confirm to delete',
    message: 'Are you sure to do delete your profile.',
    buttons: [
      {
        label: 'Yes',
        onClick: async () => {
          const response= await deleteProfile(id)
        console.log(response);
        if (response.status===200){
          setDeleteUser(response.fname)
            navigate('/') 
        }
        }
      },
      {
        label: 'No',
        // onClick: () => alert('Click No')
      }
    ]
  });
};
const getUser = async () => {
  const {data} = await getUserDetails(id);
  setProfileDetails(data)

};

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2500);
    getUser()
  },[]);
  return (
    <div className="pb-5">
      {showSpinner ? (
        <div className="text-center" style={{marginTop:'30vh'}}>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="dark" />
        </div>
      ) : (
        <div class="container shadow mt-3" style={{ width: "500px" }}>
          <div>
            <img className="w-100" src={profileDetails.profile?`${BASE_URL}/uploads/${profileDetails.profile}`:"https://i.postimg.cc/m2Dgt99r/pngwing-com-2.png"} alt="" />
          </div>
          <div class="content">
            <h4>{profileDetails&&profileDetails.fname}</h4>
            {profileDetails&&profileDetails.email} <br />
            {profileDetails&&profileDetails.mobile} <br />
            {profileDetails&&profileDetails.address}


            <div className="d-flex justify-content-between w-100">
              <Button onClick={updateProfile}>
                  Edit
              </Button>
              <Button onClick={submit}> Delete</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
