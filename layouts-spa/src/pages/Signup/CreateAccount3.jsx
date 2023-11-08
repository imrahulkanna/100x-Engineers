import React from "react";
import { useNavigate } from "react-router-dom";
import SignupHeader from "../../components/Signup/SignupHeader";
import Fieldset from "../../components/Fieldset";
import Input from "../../components/Input";
import Button from "../../components/Button";

function CreateAccount3() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-shrink-0 flex-col items-start justify-between bg-black px-[15px] pb-5 font-inter text-twitter-neutral-50">
      <section className="flex flex-col items-start gap-3 self-stretch">
        {/* Header */}
        <SignupHeader step={3} />

        {/* Verify Code */}
        <main className="flex flex-col items-start gap-10 self-stretch">
          <section className="flex flex-col items-start gap-2 self-stretch">
            <h1 className="text-2xl font-bold leading-normal">
              We sent you a code
            </h1>
            <p className="text-sm font-normal leading-normal text-twitter-neutral-500">
              Enter it below to verify janedoe@gmail.com
            </p>
          </section>
          <section className="flex flex-col items-end gap-3 self-stretch">
            <Fieldset type={"Verification code"}>
              <Input type="text" placeholder="Verification code" />
            </Fieldset>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="text-sm font-normal leading-normal text-twitter-blue"
              rel="noopener noreferrer"
            >
              Didn't receive a code?
            </a>
          </section>
        </main>
      </section>

      {/* Next Button */}
      <section className="self-stretch">
        {/* <button
          className="flex w-full items-center justify-center rounded-signup-radius bg-twitter-neutral-50 px-6 py-3 font-bold leading-normal text-black shadow-signup backdrop-blur-xl-1 hover:bg-twitter-neutral-200"
          onClick={() => navigate("/signup4")}
        >
          Next
        </button> */}
        <Button
          variant="solid"
          text="Next"
          type="primary"
          onClick={() => navigate("/signup4")}
        />
      </section>
    </div>
  );
}

export default CreateAccount3;