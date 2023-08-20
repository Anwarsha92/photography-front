import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewProfile from "./ViewProfile";
import { allUsers } from "../services/allApis";
import { deleteContext } from "../components/ContextShare";

const Home = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [users,setUsers]=useState([])

  const [searchKey,setSearchKey]=useState("")


  //deleteContext to get user details
  const {deleteUser,setDeleteUser}=useContext(deleteContext)

  console.log(deleteUser);

  const getAllUsers=async()=>{
    const {data}=await allUsers(searchKey)
    setUsers(data)
  }

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2500);
    getAllUsers()
  },[searchKey]);
  return (
    <div className="pb-5">
      
      <div
        className="header p-2 pb-5 pt-5 text-center"
        style={{ minHeight: "300px", width: "100%",fontSize:'30px'}}
      >
        {/* <h1 className="text-center" > */}
          <q style={{ color: "yellow",fontSize:'larger' }}>
            
            <span className="heading" style={{ color: "snow",fontSize:'30px'}}>Explore Photographies and Memmorise Your Moments</span>
           
          </q>
        {/* </h1> */}
      </div>
      <div className="container search_add mt-5">
        <Form className="d-flex gap-2 flex-wrap search">
          <Form.Control type="text" className="" placeholder="Search by your location" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}/>
          <Button onClick={()=>setSearchKey("")}>View All</Button>
        </Form>
        <div>
          <Link style={{color:'green'}} to={"login"}>
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
