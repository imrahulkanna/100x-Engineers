import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignupHeader from '../../components/Signup/SignupHeader';
import Fieldset from '../../components/Fieldset';
import Input from "../../components/Input";

function CreateAccount2() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen font-inter text-twitter-neutral-50 pb-5 px-[15px] bg-black flex flex-col justify-between items-start flex-shrink-0">
      <section className="flex flex-col items-start gap-3 self-stretch">
        {/* Header */}
        <SignupHeader step={2} />

        {/* Create Account Form*/}
        <main className="flex flex-col items-start gap-5 self-stretch">
          <h1 className="text-2xl leading-normal font-bold">
            Create your account
          </h1>
          <form className="flex flex-col items-start gap-8 self-stretch">
            {/* Name Fieldset */}
            <Fieldset type={"Name"}>
              <Input
                type="text"
                placeholder="Name"
              />
            </Fieldset>

            {/* Email Fieldset */}
            <Fieldset type={"Email"}>
              <Input
                type="text"
                placeholder="Email"
              />
            </Fieldset>

            {/* Date of Birth */}
            <Fieldset type={"Date of birth"}>
              <Input
                type="text"
                placeholder="Date of birth"
              />
            </Fieldset>
          </form>
        </main>
      </section>

      {/* Create Account Button*/}
      <section className="self-stretch">
        <button
          className="w-full py-3 px-6 flex justify-center items-center self-stretch gap-2.5 rounded-signup-radius bg-twitter-blue hover:bg-twitter-blue-hover shadow-signup backdrop-blur-xl-1 font-bold leading-normal"
          onClick={() => navigate('/signup3')}
        >
          Sign up
        </button>
      </section>
    </div>
  );
}

export default CreateAccount2