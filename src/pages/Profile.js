import React, {useEffect, useState } from "react";
import "../Profile.css";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUserDetails } from "../services/allApis";
import { BASE_URL } from "../services/base_url";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Profile = () => {

//dashboard context to get user details
  const[profileDetails,setProfileDetails]=useState("")

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
        // onClick: () => alert('Click Yes')
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
          <div class="image">
            <img className="w-100" src={`${BASE_URL}/uploads/${profileDetails.profile}`} alt="" />
          </div>
          <div class="content">
            <h5>Name</h5>
            <p>{profileDetails&&profileDetails.fname}</p>

            <h5>
              Address
            </h5>
            {profileDetails&&profileDetails.address}


            <div className="d-flex justify-content-between w-100">
              <Button onClick={updateProfile}>
                  Update
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
