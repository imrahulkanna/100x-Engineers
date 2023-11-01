import React from 'react';
import { useNavigate } from 'react-router-dom';
import cancel from "../assets/cancel.svg";
import Img from "../components/Img";
import userDP from '../assets/rahul.jpg'


function ComposeTweet() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black font-inter text-twitter-neutral-50 flex flex-col items-start">
      {/* Header with close & post buttons */}
      <header className="py-3 px-4 flex items-center justify-between self-stretch">
        <div onClick={() => navigate(-1)} className="cursor-pointer">
          <Img imgPath={cancel} imgAlt="cancel-icon" />
        </div>
        
        <button onClick={() => navigate('/home')} className="py-2 px-6 flex justify-center items-center gap-2.5 rounded-twitter bg-twitter-blue hover:bg-twitter-blue-hover disabled:opacity-50 disabled:hover:bg-twitter-blue md:py-[15px] md:px-[93px] md:rounded-full">
          <p className="text-twitter-neutral-50 text-base font-bold leading-normal">
            Post
         </p>
        </button>

      </header>
      <main className="self-stretch py-2 px-4 flex flex-1 gap-3">
        <Img
          imgPath={userDP}
          imgAlt="user-profile"
          style="w-9 h-9 rounded-full"
        />
        <textarea
          name="tweet-content"
          placeholder="What's happening?!"
          className="w-full flex items-center bg-transparent text-base leading-normal placeholder:text-twitter-neutral-600 focus:outline-none resize-none"
          wrap="soft"
          spellCheck="false"
          defaultValue={""}
        />
      </main>
      
      <footer className="py-3 px-4 border-t border-twitter-neutral-800 self-stretch text-sm text-twitter-neutral-500">
        0/280
      </footer>
    </div>
  );
}

export default ComposeTweet