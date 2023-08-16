import React, { useContext, useEffect, useState } from "react";
import "../UserDashboard.css";
import { Alert, Button, Spinner } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { editContext, loginContext} from "../components/ContextShare";
import { ToastContainer, toast } from "react-toastify";
import Collection from "./Collection";
import { addImages, getUserDetails, removeImage } from "../services/allApis";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../services/base_url";

const UserDashboard = () => {
  const navigate=useNavigate()

  //own context
  const{editDetails,setEditDetails}=useContext(editContext)
console.log(editDetails);
  //login cintext
  const { loginData, setLoginData } = useContext(loginContext);

  const { id } = useParams();
  // console.log(id);
  const [imageCollection, setImageCollection] = useState([]);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  //profile photo
  const [profilePhoto,setProfilePhoto]=useState("")

  const addImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  // console.log(description);
  const handleAddImage = async (e) => {
    e.preventDefault();

    if (image === "") {
      toast.error("Please select an image");
    } else {
      const headerConfig = {
        "Content-Type": "multipart/form-data",
      };
      const data = new FormData();
      data.append("image_collection", image);
      data.append("description",description)
      const response = await addImages(id, data, headerConfig);
      if(response.status===200){
        toast.success("Item added successfully")
        setTimeout(() => {
          window.location.reload();
        }, 1000);

      }
      // console.log(response);
    }
  };
  const [showAdd, setShowAdd] = useState(false);
  const addCollection = () => {
    setShowAdd(!showAdd);
  };

  const [showSpinner, setShowSpinner] = useState(true);

  //get user data
  const getUser = async () => {
    const {data} = await getUserDetails(id);
    setImageCollection(data);
    setProfilePhoto(data.profile)

  };
  console.log(profilePhoto);
  console.log(imageCollection);

  const deleteImage= async(id,index)=>{
    const data=index
      const response=await removeImage(id,{data})
      if(response.status===200){
        toast.success("Deleted Successfully")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      // console.log(response);

  }
  const viewProfile=()=>{
    navigate(`/login/user_dashboard/user_profile/${id}`)
  }
  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2500);
    getUser();
  }, []);

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
          <div className="user-profile bg-primary text-center">
            <div className="user-profilelg mt-2 text-center p-2" style={{ overflow: "hidden" }}>
              <img
              style={{width:'100%',height:'250px'}}
                className="rounded-circle mb-4"
                src={`${BASE_URL}/uploads/${profilePhoto}`}
                alt="no image"
              />
              <Button href="">Dashboard</Button>
              <Button onClick={viewProfile}>Profile</Button>
              <Button onClick={addCollection}>Add Collection</Button>
              {showAdd && (
                <form>
                  <input
                    type="file"
                    name="image_collection"
                    onChange={addImage}
                  />

                  <textarea
                    style={{ width: "100%" }}
                    type="text"
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    onClick={handleAddImage}
                    className="mt-2 bg-warning w-100"
                  >
                    Add
                  </Button>
                </form>
              )}
              <Button>Log Out</Button>
            </div>

            <div className="user-profilesm mt-2">
              <Button href="">
                <FaTh />
              </Button>
              <Button>
                <FaUserAlt />
              </Button>
              <Button onClick={addCollection}>
                <FaShoppingBag />
              </Button>
              {showAdd && (
                <div className="d-flex flex-column">
                  <form>
                    <input
                      style={{ width: "150px" }}
                      type="file"
                      name="image_collection"
                      onChange={addImage}
                    />
                    <textarea
                      style={{ width: "150px" }}
                      type="text"
                      name="description"
                      placeholder="description"
                      onChange={handleChange}
                    />
                    <Button
                      type="submit"
                      onClick={handleAddImage}
                      className="mt-2 bg-warning "
                    >
                      Add
                    </Button>
                  </form>
                </div>
              )}
              <Button>Log Out</Button>
            </div>
          </div>
          <div className="p-3 w-100 ">
            {loginData ? (
              <Alert
                className="text-center text-white mt-2 w-50 container bg-success"
                onClose={() => setLoginData("")}
                dismissible
              >
                {loginData.fname.toUpperCase()} Successfully Login
              </Alert>
            ) : (
              ""
            )}
            {editDetails ? (
              <Alert
                className="text-center text-white mt-2 w-50 container bg-success"
                onClose={() => setEditDetails("")}
                dismissible
              >
                Profile Successfully Updated
              </Alert>
            ) : (
              ""
            )}
            <div>
              <Collection imageCollection={imageCollection} id={id} deleteImage={deleteImage} />
            </div>
          </div>
        </div>
      )}
      <div>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default UserDashboard;
