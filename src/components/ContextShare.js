import React, { createContext, useState } from "react";

export const registerContext = createContext();
export const loginContext = createContext();
export const editContext= createContext()
const ContextShare = ({ children }) => {
  const [registerData, setRegisterData] = useState();
  const [loginData, setLoginData] = useState();
  const [editDetails,setEditDetails]=useState()

  return (
    <div>
      <registerContext.Provider value={{ registerData, setRegisterData }}>
        <loginContext.Provider value={{loginData, setLoginData}}>
          <editContext.Provider value={{editDetails,setEditDetails}}>
            {children}
          </editContext.Provider>
          </loginContext.Provider>
      </registerContext.Provider>
    </div>
  );
};

export default ContextShare;
