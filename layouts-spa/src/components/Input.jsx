import React from 'react'

const Input = ({type, placeholder, style='', ...rest}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={
        style ||
        "w-full bg-transparent placeholder:text-twitter-neutral-500 text-twitter-neutral-50 text-base leading-normal focus:outline-none"
      }
      {...rest}
    />
  );
}

export default Input