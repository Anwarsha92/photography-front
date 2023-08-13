import React, { useEffect, useState } from "react";
import "../UserDashboard.css";
import { Button, Spinner } from "react-bootstrap";

import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

const UserDashboard = () => {
  const [showAdd, setShowAdd] = useState(false);
  const addCollection = () => {
    setShowAdd(!showAdd);
  };

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2500);
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
        <div className="d-flex">
          <div className="user-profile text-center p-1">
            <div className="user-profilelg mt-2">
              <img
                className="rounded-circle"
                src="https://spng.pngfind.com/pngs/s/176-1760995_png-file-svg-user-icon-free-copyright-transparent.png"
                alt="no image"
              />
              <Button href="">Dashboard</Button>
              <Button href="/login/user_dashboard/user_profile">Profile</Button>
              <Button onClick={addCollection}>Add Collection</Button>
              {showAdd && (
                <p>
                  <input type="file" />
                  <Button className="mt-2">Add</Button>
                </p>
              )}
              <Button>Log Out</Button>
            </div>

            <div className="user-profilesm mt-2">
              <Button href="">
                <FaTh />
              </Button>
              <Button href="/login/user_dashboard/user_profile">
                <FaUserAlt />
              </Button>
              <Button onClick={addCollection}>
                <FaShoppingBag />
              </Button>
              {showAdd && (
                <div className="d-flex flex-column">
                  <input style={{ width: "100px" }} type="file" />
                  <Button className="mt-2">Add</Button>
                </div>
              )}
              <Button>Log Out</Button>
            </div>
          </div>
          <div className="ms-3">
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
