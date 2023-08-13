import React, { useEffect, useState } from "react";
import "../Profile.css";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";


const Profile = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2500);
  });
  return (
    <div>
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
        <div class="card container shadow mt-3" style={{ width: "500px" }}>
          <div class="image"></div>
          <div class="content">
            <a href="#">
              <span class="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </a>

            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium
            </p>

            <div className="d-flex justify-content-between">
              <Button>
                <Link
                  style={{ color: "white" }}
                  to={"/login/user_dashboard/user_profile/user_edit"}
                >
                  {" "}
                  Update
                </Link>
              </Button>
              <Button> Delete</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
