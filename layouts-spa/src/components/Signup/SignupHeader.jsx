import React from "react";
import { useNavigate } from "react-router-dom";
import cancelIcon from "../../assets/cancel.svg";
import Img from "../Img";

function SignupHeader({ step }) {
  const navigate = useNavigate();
  function handleImgClick() {
    navigate("/");
  }
  return (
    <header className="flex items-center gap-5 self-stretch py-3">
      <button onClick={handleImgClick}>
        <Img imgPath={cancelIcon} imgAlt="cancel-icon" />
      </button>
      <p className="text-base-1 font-bold leading-normal">Step {step} of 4</p>
    </header>
  );
}

export default SignupHeader;
