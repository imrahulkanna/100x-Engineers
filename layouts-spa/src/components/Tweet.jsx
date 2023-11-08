import React from "react";
import Icon from "./Icon";

function Tweet({
  id,
  userName,
  handleName,
  tweetPostedTime,
  content,
  avatar,
  tweetIconDetails,
}) {
  return (
    <article className="flex items-start gap-4 self-stretch border-b border-twitter-neutral-700 px-4 py-2">
      {/* user avatar */}
      <img src={avatar} alt="avatar-1" className="h-12 w-12 rounded-full" />

      {/* tweet body */}
      <div className="flex w-full flex-col gap-1 self-stretch">
        <header className="flex items-center gap-2 self-stretch">
          <p className="text-base font-medium leading-normal text-twitter-neutral-50">
            {userName}
          </p>
          <p className="text-base font-normal leading-normal text-twitter-neutral-500">
            @{handleName} • {tweetPostedTime}
          </p>
        </header>
        <p className="self-stretch whitespace-pre-line text-base-1 leading-normal">
          {content}
        </p>

        {/* icons */}
        <div className="flex items-center justify-between self-stretch py-3 text-sm leading-normal text-twitter-neutral-500">
          {tweetIconDetails.map((icon, key) => {
            return (
              <Icon
                key={key}
                id={id}
                iconPath={icon.svg}
                iconName={icon.name}
                iconCount={icon.count}
                isToggle={icon.isToggle}
                style={"flex items-center gap-[5px]"}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Tweet;
