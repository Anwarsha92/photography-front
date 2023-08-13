import React, { useEffect, useState } from "react";
import "../App.css";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewProfile from "./ViewProfile";

const Home = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2500);
  });
  return (
    <div>
      <div
        className="header p-2 pb-5 pt-5"
        style={{ minHeight: "100px", width: "100%" }}
      >
        <div className="text-center">
          <h1>
            <q style={{ color: "white" }}>
              {" "}
              <span style={{ color: "yellow" }}>Explore</span>{" "}
              <span style={{ color: "snow" }}>Photographies</span>{" "}
              <span style={{ color: "green" }}>and</span>{" "}
              <span style={{ color: "snow" }}>Memmorise</span> <br />{" "}
              <span style={{ color: "red" }}>Your Moments</span>{" "}
            </q>
          </h1>
        </div>
        <div className="container search_add mt-5">
          <Form className="d-flex gap-2 flex-wrap search">
            <Form.Control type="text" /> <Button>Search</Button>
          </Form>
          <div>
            <Link to={"login"}>
              <Button>Add Your Collection</Button>
            </Link>
          </div>
        </div>
      </div>
      {showSpinner ? (
        <div className="text-center mt-5">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="dark" />
        </div>
      ) : (
        <div className="p-2 d-flex justify-content-center flex-wrap gap-2">
          {" "}
          <ViewProfile />
        </div>
      )}
    </div>
  );
};

export default Home;
