import React from "react";
import { useAuth } from "../context/AuthContext";

const Input = ({ type, placeholder, style = "", ...rest }) => {
  const { userCred, setUserCred } = useAuth();
  let dob = "";

  if (placeholder === "Date of birth") {
    dob = userCred["Year"]
      ? userCred["Month"].slice(0, 3) +
        " " +
        userCred["Day"] +
        ", " +
        userCred["Year"]
      : "";
    // console.log(dob);
  }
  const handleChange = (e) => {
    setUserCred({ ...userCred, [placeholder]: e.target.value });
  };

  return (
    <input
      type={type}
      value={placeholder === "Date of birth" ? dob : userCred[placeholder]}
      onChange={handleChange}
      placeholder={placeholder}
      className={
        style ||
        "w-full bg-transparent text-base leading-normal text-twitter-neutral-50 placeholder:text-twitter-neutral-500 focus:outline-none"
      }
      {...rest}
    />
  );
};

export default Input;
