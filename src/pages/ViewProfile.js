import React from "react";
import "../ViewProfile.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../services/base_url";

const ViewProfile = ({ users }) => {
  console.log(users);
  return (
    <div>
            <h3 className="text-center">Latest Collections</h3>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        {users &&
          users.map((item) => (
            
            <div style={{width:'unset'}} key={item._id}>
              {item.collections.length >=1 && (
              <div className="card2 " style={{width:'300px', maxWidth:'100%'}} >
                
  
                  <div>
                    <img className="w-100"
                      src={`${BASE_URL}/uploads/${
                        item.collections[item.collections.length - 1].key1
                      }`}
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    {
                      item.profile&&(
                        <div><img style={{height:'50px',width:'50px'}} className="rounded-circle shadow" src={`${BASE_URL}/uploads/${item.profile}`} alt="" /></div>
                      )
                    }
                    <span>Collection by </span><span style={{fontWeight:'bold'}}>{item.fname}</span><br />
                    (<span style={{color:'red'}}>{item.collections.length}</span> collections)
                    
                  </div>

                <div class="overlay"></div>
                <button class="card2-btn">
                  <Link to={`view_more/${item._id}`}>View More</Link>
                </button>
              </div>
              )}
            </div>
            
          ))}
      </div>
    </div>
  );
};

export default ViewProfile;

