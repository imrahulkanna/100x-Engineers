import React from 'react';
import SignupHeader from '../../components/Signup/SignupHeader';
import Input from '../../components/Input';
import Img from '../../components/Img';
import eyeIcon from '../../assets/visible-t.svg'
import { useNavigate } from 'react-router-dom';

function CreateAccount4() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen font-inter text-twitter-neutral-50 pb-5 px-[15px] bg-black flex flex-col justify-between items-start flex-shrink-0">
      <section className="flex flex-col items-start gap-3 self-stretch">
        {/* Header */}
        <SignupHeader step={4} />

        {/* Adding a Password */}
        <main className="flex flex-col items-start self-stretch gap-10">
          <section className="flex flex-col items-start gap-2 self-stretch">
            <h1 className="text-2xl leading-normal font-bold">
              You’ll need a password
            </h1>
            <p className="text-twitter-neutral-500 text-sm leading-normal font-normal">
              Make sure it’s 8 characters or more
            </p>
          </section>
          <section className="self-stretch">
            <Input type={"Password"}>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent  placeholder:text-twitter-neutral-500 text-twitter-neutral-50 text-base leading-normal focus:outline-none"
              />
              <Img imgPath={eyeIcon} imgAlt="visible-t-icon" style="w-6 h-6" />
            </Input>
          </section>
        </main>
      </section>

      {/* Next Button */}
      <section className="self-stretch">
        <button 
          className="w-full py-3 px-6 rounded-signup-radius bg-twitter-neutral-50 hover:bg-twitter-neutral-200 text-black font-bold leading-normal flex justify-center items-center shadow-signup backdrop-blur-xl-1"
          onClick={() => navigate('/home')}
        >
          Next
        </button>
      </section>
    </div>
  );
}

export default CreateAccount4