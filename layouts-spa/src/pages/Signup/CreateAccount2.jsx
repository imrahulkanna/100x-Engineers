import React from "react";
import { useNavigate } from "react-router-dom";
import SignupHeader from "../../components/Signup/SignupHeader";
import Fieldset from "../../components/Fieldset";
import Input from "../../components/Input";
import Img from "../../components/Img";
import correctImg from "../../assets/correct.svg";
import Button from "../../components/Button";

function CreateAccount2() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-shrink-0 flex-col items-start justify-between bg-black px-[15px] pb-5 font-inter text-twitter-neutral-50">
      <section className="flex flex-col items-start gap-3 self-stretch">
        {/* Header */}
        <SignupHeader step={2} />

        {/* Create Account Form*/}
        <main className="flex flex-col items-start gap-5 self-stretch">
          <h1 className="text-2xl font-bold leading-normal">
            Create your account
          </h1>
          <form className="flex flex-col items-start gap-8 self-stretch">
            {/* Name Fieldset */}
            <Fieldset type={"Name"}>
              <Input type="text" placeholder="Name" />
              <Img imgPath={correctImg} imgAlt="correct-icon" />
            </Fieldset>

            {/* Email Fieldset */}
            <Fieldset type={"Email"}>
              <Input type="text" placeholder="Email" />
              <Img imgPath={correctImg} imgAlt="correct-icon" />
            </Fieldset>

            {/* Date of Birth */}
            <Fieldset type={"Date of birth"}>
              <Input type="text" placeholder="Date of birth" />
              <Img imgPath={correctImg} imgAlt="correct-icon" />
            </Fieldset>
          </form>
        </main>
      </section>

      {/* Create Account Button*/}
      <section className="self-stretch">
        {/* <button
          className="flex w-full items-center justify-center self-stretch rounded-signup-radius bg-twitter-blue px-6 py-3 font-bold leading-normal text-twitter-neutral-50 shadow-signup backdrop-blur-xl-1 hover:bg-twitter-blue-hover"
          onClick={() => navigate("/signup3")}
        >
          Sign up
        </button> */}
        <Button
          variant="solid"
          text="Sign up"
          type="secondary"
          onClick={() => navigate("/signup3")}
        />
      </section>
    </div>
  );
}

export default CreateAccount2;
