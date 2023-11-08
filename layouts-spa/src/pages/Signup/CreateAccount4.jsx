import React, { useState } from "react";
import SignupHeader from "../../components/Signup/SignupHeader";
import Fieldset from "../../components/Fieldset";
import Input from "../../components/Input";
import Img from "../../components/Img";
import Button from "../../components/Button";
import eyeIcon from "../../assets/visible-t.svg";
import eyeIconActive from "../../assets/visible-t-blue.svg";
import { useNavigate } from "react-router-dom";

function CreateAccount4() {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeIcon);

  const togglePassWordDisplay = () => {
    if (type === "password") {
      setType("text");
      setIcon(eyeIconActive);
    } else {
      setType("password");
      setIcon(eyeIcon);
    }
  };

  return (
    <div className="flex min-h-screen flex-shrink-0 flex-col items-start justify-between bg-black px-[15px] pb-5 font-inter text-twitter-neutral-50">
      <section className="flex flex-col items-start gap-3 self-stretch">
        {/* Header */}
        <SignupHeader step={4} />

        {/* Adding a Password */}
        <main className="flex flex-col items-start gap-10 self-stretch">
          <section className="flex flex-col items-start gap-2 self-stretch">
            <h1 className="text-2xl font-bold leading-normal">
              You’ll need a password
            </h1>
            <p className="text-sm font-normal leading-normal text-twitter-neutral-500">
              Make sure it’s 8 characters or more
            </p>
          </section>
          <section className="self-stretch">
            <Fieldset type={"Password"}>
              <Input type={type} placeholder="Password" />
              <Img
                imgPath={icon}
                imgAlt="visible-t-icon"
                style="w-6 h-6"
                onClick={togglePassWordDisplay}
              />
            </Fieldset>
          </section>
        </main>
      </section>

      {/* Next Button */}
      <section className="self-stretch">
        {/* <button
          className="flex w-full items-center justify-center rounded-signup-radius bg-twitter-neutral-50 px-6 py-3 font-bold leading-normal text-black shadow-signup backdrop-blur-xl-1 hover:bg-twitter-neutral-200"
          onClick={() => navigate("/home")}
        >
          Next
        </button> */}
        <Button
          variant="solid"
          text="Next"
          type="primary"
          onClick={() => navigate("/home")}
        />
      </section>
    </div>
  );
}

export default CreateAccount4;
