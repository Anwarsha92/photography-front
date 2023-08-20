import React, { useState } from "react";
import "../Collection.css";
import { BASE_URL } from "../services/base_url";
import { Dropdown } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Collection = ({ imageCollection, id, deleteImage }) => {
  const { collections } = imageCollection;
  console.log(imageCollection);

  const submit = (id, index) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do delete this collection?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteImage(id, index),
        },
        {
          label: "No",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  const reversedCollection=[...collections].reverse()

  return (
    <div>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {reversedCollection.length>0?(reversedCollection.map((images, index) => (

          <div
            className="collections"
            key={imageCollection._id}
          >
            <div className="shadow">
              <img
                className="w-100"
                src={`${BASE_URL}/uploads/${images.key1}`}
                alt=""
              />

              
              <div className="d-flex justify-content-between bg-light p-1">
              <div></div>

              <div><h6 className="text-center mt-3  text-black">{images.key2}</h6></div>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-action"
                  ></Dropdown.Toggle>
  
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => submit(id, index)}>
                      <i className="las la-trash text-danger"></i>
                      <span className="fs-6 ms-2 text-danger">Delete</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        ))): 
        <div className="text-center">
          <h1>Your Collection is Empty</h1>
        <h3>Plaese Add Your Collections</h3>
        </div>}
      </div>
    </div>
  );
};

export default Collection;
