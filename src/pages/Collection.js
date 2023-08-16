import React, { useState } from "react";
import "../Collection.css";
import { BASE_URL } from "../services/base_url";
import { Dropdown } from "react-bootstrap";

const Collection = ({ imageCollection,id,deleteImage }) => {
  const { collections } = imageCollection;
  console.log(imageCollection);

  
  return (
    <div>
      <div className="d-flex gap-3 flex-wrap">
        {collections?.map((images, index) => (
          <div key={index} className="shadow p-3">
            <img
              style={{ width: "300px", maxWidth: "100%" }}
              src={`${BASE_URL}/uploads/${images.key1}`}
              alt=""
            />
            <h6 className="text-center mt-3">{images.key2}</h6>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-action">
                Select
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>deleteImage(id,index)}>
                  <i className="las la-user-minus text-danger"></i>
                  <span className="fs-6 ms-2 text-danger">Delete</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
