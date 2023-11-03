import React from 'react'

const Fieldset = ({type, size='full', children}) => {
  const sizeClasses = {
    'full': "w-full",
    "1/2": "w-1/2",
    "1/4": "w-1/4",
  };

  const sizeClass = sizeClasses[size];

  const style = `group ${sizeClass} pt-2  pb-4 px-3 border border-twitter-neutral-500 rounded-[4px] flex items-center focus-within:outline-none focus-within:border-twitter-blue focus-within:ring-twitter-blue`;
  console.log(style);

  return (
    <fieldset className={style}>
      <legend className="px-1 text-twitter-neutral-500 text-xs font-medium leading-normal group-focus-within:text-twitter-blue">
        {type}
      </legend>
      {children}
    </fieldset>
  );
}

export default Fieldset