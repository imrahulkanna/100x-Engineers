import React from 'react';
import Icon from './Icon';

function Tweet({
  id, 
  userName, 
  handleName, 
  tweetPostedTime, 
  content, avatar, 
  tweetIconDetails
}) {
  return (
    <article className="py-2 px-4 border-b border-twitter-neutral-700 self-stretch flex items-start gap-4">
      {/* user avatar */}
      <img
        src={avatar}
        alt="avatar-1"
        className="w-12 h-12 rounded-full"
      />

      {/* tweet body */}
      <div className="w-full flex flex-col gap-1 self-stretch">
        <header className="flex items-center gap-2 self-stretch">
          <p className="text-twitter-neutral-50 text-base font-medium leading-normal">
            {userName}
          </p>
          <p className="text-twitter-neutral-500 text-base font-normal leading-normal">
            @{handleName} • {tweetPostedTime}
          </p>
        </header>
        <p className="self-stretch text-base-1 leading-normal whitespace-pre-line">
          {content}
        </p>

        {/* icons */}
        <div className="py-3 flex justify-between items-center self-stretch text-twitter-neutral-500 text-sm leading-normal">
          {
            tweetIconDetails.map((icon, key) => {
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
          })
          }
        </div>
      </div>
    </article>
  );
}

export default Tweet