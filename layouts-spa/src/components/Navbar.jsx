import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("for you");

  function handleClick(tabname) {
    setActiveTab(tabname);
  }

  return (
    <nav className="flex cursor-pointer self-stretch border-b border-twitter-neutral-700">
      <div
        className="flex w-1/2 justify-center hover:bg-twitter-neutral-900"
        onClick={() => handleClick("for you")}
      >
        <div className="flex flex-col gap-3 pt-5">
          <p
            className={
              activeTab === "for you" ? "" : "text-twitter-neutral-400"
            }
          >
            For you
          </p>
          <div
            className={`h-[3px] w-full rounded-twitter bg-twitter-blue ${
              activeTab === "for you" ? "block" : "hidden"
            }`}
          />
        </div>
      </div>
      <div
        className="flex w-1/2 justify-center hover:bg-twitter-neutral-900"
        onClick={() => handleClick("following")}
      >
        <div className="flex flex-col gap-3 pt-5">
          <p
            className={
              activeTab === "following" ? "" : "text-twitter-neutral-400"
            }
          >
            Following
          </p>
          <div
            className={`h-[3px] w-full rounded-twitter bg-twitter-blue ${
              activeTab === "following" ? "block" : "hidden"
            }`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
