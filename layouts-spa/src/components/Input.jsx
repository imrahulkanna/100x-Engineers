import React from 'react'

const Input = ({type, children}) => {
  
  const size = {
    'Month': "6/12",
    'Day': "3/12",
    'Year': "3/12",
  };

  const w_size = size[type]? size[type] : 'full';

  const style = `group w-${w_size} pt-2  pb-4 px-3 border border-twitter-neutral-500 rounded-[4px] flex items-center focus-within:outline-none focus-within:border-twitter-blue focus-within:ring-twitter-blue`;

  return (
    <fieldset className={style}>
      <legend className="px-1 text-twitter-neutral-500 text-xs font-medium leading-normal group-focus-within:text-twitter-blue">
        {type}
      </legend>
      {children}
    </fieldset>
  );
}

export default Input