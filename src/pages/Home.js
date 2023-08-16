import React, { useEffect, useState } from "react";
import "../App.css";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewProfile from "./ViewProfile";
import { allUsers } from "../services/allApis";

const Home = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [users,setUsers]=useState([])

  const getAllUsers=async()=>{
    const {data}=await allUsers()
    setUsers(data)
  }

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2500);
    getAllUsers()
  },[]);
  return (
    <div className="pb-5">
      <div
        className="header p-2 pb-5 pt-5"
        style={{ minHeight: "300px", width: "100%" }}
      >
        <h1 className="text-center">
          <q style={{ color: "yellow",fontSize:'larger' }}>
            {" "}
            <span style={{ color: "snow" }}>Explore</span>{" "}
            <span style={{ color: "snow" }}>Photographies</span>{" "}
            <span style={{ color: "snow" }}>and</span>{" "}
            <span style={{ color: "snow" }}>Memmorise</span> <br />{" "}
            <span style={{ color: "snow" }}>Your Moments</span>{" "}
          </q>
        </h1>
      </div>
      <div className="container search_add mt-5">
        <Form className="d-flex gap-2 flex-wrap search">
          <Form.Control type="text" className="shadow" placeholder="Search by your location" />{" "}
          <Button>Search</Button>
        </Form>
        <div>
          <Link to={"login"}>
            Add Your Collection
          </Link>
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
        <div>
          <ViewProfile users={users}/>
        </div>
      )}
    </div>
  );
};

export default Home;
