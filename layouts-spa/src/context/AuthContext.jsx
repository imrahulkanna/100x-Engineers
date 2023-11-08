import { useState, createContext, useContext } from "react";

// creating a context/store to make these data accessible to everyone. This is give us provider and consumers.
export const AuthContext = createContext();

// using CustomHooks to utilize the context provided by the provider
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  // creating an template object for credentials
  const cred = {
    Name: "",
    Email: "",
    Month: "",
    Day: "",
    Year: "",
    "Date of birth": "",
    Password: "",
    "Verification code": "",
  };

  const [userCred, setUserCred] = useState(cred);

  // creating a context Provider. This provider will be wrap the parent component that requires this data. With this all the child components and their child components can access the data
  return (
    <AuthContext.Provider value={{ userCred, setUserCred }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
