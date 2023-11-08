import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTweetData } from "../context/TweetContext";
import cancel from "../assets/cancel.svg";
import Img from "../components/Img";
import userDP from "../assets/rahul.jpg";
import Button from "../components/Button";

function ComposeTweet() {
  const navigate = useNavigate();
  const [newTweet, setNewTweet] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const { addTweet } = useTweetData();

  const handleChange = (e) => {
    setNewTweet(e.target.value);
    let currentCount = e.target.value.length;
    if (currentCount > 280) {
      currentCount = 280 - currentCount;
    }
    setCharacterCount(currentCount);
  };

  const handleClick = () => {
    addTweet(newTweet);
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen flex-col items-start bg-black font-inter text-twitter-neutral-50">
      {/* Header with close & post buttons */}
      <header className="flex items-center justify-between self-stretch px-4 py-3">
        <div onClick={() => navigate(-1)} className="cursor-pointer">
          <Img imgPath={cancel} imgAlt="cancel-icon" />
        </div>

        {/* <button
          onClick={handleClick}
          disabled={characterCount <= 0 ? true : false}
          className="flex items-center justify-center rounded-twitter bg-twitter-blue px-6 py-2 text-base font-bold leading-normal text-twitter-neutral-50 shadow-signup backdrop-blur-xl-1 hover:bg-twitter-blue-hover disabled:opacity-50 disabled:hover:bg-twitter-blue md:rounded-full md:px-[93px] md:py-[15px]"
        >
          Post
        </button> */}
        <Button
          variant="solid"
          text="Post"
          type="secondary"
          onClick={handleClick}
          disabled={characterCount <= 0 ? true : false}
        />
      </header>

      <main className="flex flex-1 gap-3 self-stretch px-4 py-2">
        <Img
          imgPath={userDP}
          imgAlt="user-profile"
          style="w-9 h-9 rounded-full"
        />
        <textarea
          name="tweet-content"
          placeholder="What's happening?!"
          className="flex w-full resize-none items-center bg-transparent text-base leading-normal placeholder:text-twitter-neutral-600 focus:outline-none"
          wrap="soft"
          spellCheck="false"
          value={newTweet}
          onChange={handleChange}
        />
      </main>

      <footer className="self-stretch border-t border-twitter-neutral-800 px-4 py-3 text-sm font-semibold text-twitter-neutral-500">
        <span className={characterCount >= 0 ? "text-inherit" : "text-error"}>
          {characterCount}
        </span>
        /280
      </footer>
    </div>
  );
}

export default ComposeTweet;
