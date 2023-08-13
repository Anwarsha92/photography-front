import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const EditProfile = () => {
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
        <div className="login-box container mt-5" style={{ width: "600px" }}>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Mobile</label>
            </div>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Address</label>
            </div>
            <div className="user-box">
              <input type="file" name="" required="" />
              <label>Profile</label>
            </div>
            <center>
              <a href="">
                Update
                <span></span>
              </a>
            </center>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
