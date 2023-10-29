import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo100 from '../assets/100.svg';
import logoX from '../assets/x.svg';

function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-twitter-neutral-50 font-inter flex flex-col justify-center">

      {/* Logo */}
      <header className="w-full py-3 px-4 flex justify-center items-end absolute top-0">
        <img src={logo100} alt="100-icon" />
        <img src={logoX} alt="100-icon" />
      </header>

      {/* Sign in */}
      <main className="px-7 flex flex-col items-start gap-10">
        <div className="flex flex-col items-start self-stretch gap-3">
          <p className="text-3.25xl leading-normal font-extrabold">
            Happening now
          </p>
          <p className="text-base leading-normal font-medium">Join today.</p>
        </div>
        <button 
          onClick={() => navigate('/signup')} 
          className="w-full py-2 px-6 rounded-signup-radius bg-twitter-neutral-50 hover:bg-twitter-neutral-200 text-black font-bold leading-normal flex justify-center items-center shadow-signup backdrop-blur-xl-1"
        >
          Create account
        </button>
        <div className="w-full flex justify-center items-center self-stretch gap-1">
          <div className="w-full h-px bg-neutral-700" />
          <p>or</p>
          <div className="w-full h-px bg-neutral-700" />
        </div>
        <div className="flex flex-col items-start self-stretch gap-5">
          <p className="text-base-1 leading-normal font-normal">
            Already have an account?
          </p>

          <button
            onClick={() => navigate("/home")}
            className="w-full py-2 px-6 border border-stroke rounded-signup-radius text-twitter-blue text-base leading-normal font-bold flex justify-center items-center gap-2 shadow-signup backdrop-blur-xl-1"
          >
            Sign in
          </button>
        </div>
      </main>
    </div>
  );
}

export default Login