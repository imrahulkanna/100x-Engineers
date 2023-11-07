import React, { useState } from 'react'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('for you')
  
  function handleClick(tabname) {
    setActiveTab(tabname);
  }

  return (
    <nav className="self-stretch flex border-b border-twitter-neutral-700 cursor-pointer">
      <div
        className="w-1/2 flex justify-center hover:bg-twitter-neutral-900"
        onClick={() => handleClick("for you")}
      >
        <div className="pt-5 flex flex-col gap-3">
          <p
            className={
              activeTab === "for you" ? "" : "text-twitter-neutral-400"
            }
          >
            For you
          </p>
          <div
            className={`w-full h-[3px] rounded-twitter bg-twitter-blue ${
              activeTab === "for you" ? "block" : "hidden"
            }`}
          />
        </div>
      </div>
      <div
        className="w-1/2 flex justify-center hover:bg-twitter-neutral-900"
        onClick={() => handleClick("following")}
      >
        <div className="pt-5 flex flex-col gap-3">
          <p
            className={
              activeTab === "following" ? "" : "text-twitter-neutral-400"
            }
          >
            Following
          </p>
          <div
            className={`w-full h-[3px] rounded-twitter bg-twitter-blue ${
              activeTab === "following" ? "block" : "hidden"
            }`}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar