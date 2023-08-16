import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getUserDetails } from "../services/allApis";
import { BASE_URL } from "../services/base_url";

const ViewMore = () => {
  const {id}=useParams()
  console.log(id);

  const [imageCollection,setImageCollection]=useState()
  const [showSpinner, setShowSpinner] = useState(true);

  const getUser = async () => {
    const {data} = await getUserDetails(id);
    setImageCollection(data);
  }

  console.log(imageCollection);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2500);
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
        
       <div>
        {
          imageCollection&&(
            
            <div style={{minHeight:'50px',alignItems:'center'}} className="d-flex flex-wrap justify-content-between ps-5 p-2 pe-5">
              <div><span><img style={{width:'50px',height:'50px'}} className="rounded-circle" src={`${BASE_URL}/uploads/${imageCollection.profile}`} alt="" /></span><span style={{fontWeight:'bold'}}>{imageCollection.fname}</span></div>
              <div><a style={{textDecoration:'none'}} href={`https://wa.me/${imageCollection.mobile}`}><i class="text-success lab la-whatsapp"></i>{imageCollection.mobile}</a></div>
              </div>
          )
        }
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {
            imageCollection.collections&&imageCollection.collections.map(images=>(
             <div style={{maxWidth:'90%'}}>
                <div className="rounded-3 shadow">
                  <img className="rounded-3" style={{maxWidth:'100%'}} src={`${BASE_URL}/uploads/${images.key1}`} alt="" />
                </div>
             </div>
            ))
          }
        </div>
          
       </div>
      )}
    </div>
  );
};

export default ViewMore;
