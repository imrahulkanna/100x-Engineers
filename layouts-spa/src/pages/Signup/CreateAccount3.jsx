import React from 'react';
import { useNavigate } from "react-router-dom";
import SignupHeader from '../../components/Signup/SignupHeader';
import Fieldset from "../../components/Fieldset";
import Input from "../../components/Input";


function CreateAccount3() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen font-inter text-twitter-neutral-50 pb-5 px-[15px] bg-black flex flex-col justify-between items-start flex-shrink-0">
      <section className="flex flex-col items-start gap-3 self-stretch">
        {/* Header */}
        <SignupHeader step={3} />

        {/* Verify Code */}
        <main className="flex flex-col items-start self-stretch gap-10">
          <section className="flex flex-col items-start gap-2 self-stretch">
            <h1 className="text-2xl leading-normal font-bold">
              We sent you a code
            </h1>
            <p className="text-twitter-neutral-500 text-sm leading-normal font-normal">
              Enter it below to verify janedoe@gmail.com
            </p>
          </section>
          <section className="flex flex-col items-end self-stretch gap-3">
            <Fieldset type={"Verification code"}>
              <Input
                type="text"
                placeholder="Verification code"
              />
            </Fieldset>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="text-twitter-blue text-sm leading-normal font-normal"
              rel="noopener noreferrer"
            >
              Didn't receive a code?
            </a>
          </section>
        </main>
      </section>

      {/* Next Button */}
      <section className="self-stretch">
        <button
          className="w-full py-3 px-6 rounded-signup-radius bg-twitter-neutral-50 hover:bg-twitter-neutral-200 text-black font-bold leading-normal flex justify-center items-center shadow-signup backdrop-blur-xl-1"
          onClick={() => navigate('/signup4')}
        >
          Next
        </button>
      </section>
    </div>
  );
}

export default CreateAccount3