import React, { createContext, useState } from "react";

export const registerContext = createContext();
export const loginContext = createContext();
export const editContext= createContext()
export const deleteContext=createContext()
const ContextShare = ({ children }) => {
  const [registerData, setRegisterData] = useState();
  const [loginData, setLoginData] = useState();
  const [editDetails,setEditDetails]=useState()
  const [deleteUser,setDeleteUser]=useState()
  

  return (
    <div>
      <registerContext.Provider value={{ registerData, setRegisterData }}>
        <loginContext.Provider value={{loginData, setLoginData}}>
          <editContext.Provider value={{editDetails,setEditDetails}}>
            <deleteContext.Provider value={{deleteUser,setDeleteUser}}>{children}</deleteContext.Provider>
          </editContext.Provider>
          </loginContext.Provider>
      </registerContext.Provider>
    </div>
  );
};

export default ContextShare;
