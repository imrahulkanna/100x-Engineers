import React from "react";
import { useAuth } from "../context/AuthContext";

export const SelectItem = ({ value, ...rest }) => {
  return (
    <option value={value} {...rest}>
      {value}
    </option>
  );
};

const Select = ({ name, children }) => {
  const { userCred, setUserCred } = useAuth();

  function handleChange(e) {
    setUserCred({ ...userCred, [name]: e.target.value });
  }

  return (
    <select
      name={name}
      value={userCred[name]}
      onChange={handleChange}
      className="w-full bg-black focus:outline-none"
    >
      {children}
    </select>
  );
};

export default Select;
