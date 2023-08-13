import React from "react";
import "../ViewProfile.css";
import { Link } from "react-router-dom";

const ViewProfile = () => {
  return (
    <div>
      <div class="card shadow">
        <p class="heading">Card Hover</p>
        <p class="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
        <div class="overlay"></div>
        <button class="card-btn">
          <Link to={"view_more"}>View More</Link>
        </button>
      </div>
    </div>
  );
};

export default ViewProfile;
