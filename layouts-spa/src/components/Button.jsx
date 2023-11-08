import React from "react";

const Button = ({ children, variant, type, text, modal, disabled, ...rest }) => {
  const basestyle =
    "flex items-center justify-center px-6 font-bold leading-normal text-base shadow-signup backdrop-blur-xl-1";

  const buttonVariant = {
    solid: {
      "Create account": `w-full rounded-signup-radius ${
        modal === "login" ? "py-2" : "py-3"
      }`,
      Next: "w-full rounded-signup-radius py-3",
      "Sign up": "w-full self-stretch rounded-signup-radius py-3",
      Post: "rounded-twitter py-2 md:rounded-full md:px-[93px] md:py-[15px]",
      Save: "rounded-twitter py-2 md:rounded-full md:px-[93px] md:py-[15px]",
    },
    outline: {
      "Sign in":
        "w-full rounded-signup-radius border border-stroke py-2 text-twitter-blue",
      "Edit profile":
        "flex items-center justify-center rounded-twitter border border-button-stroke px-5 py-2",
    },
  };

  const colorType = {
    primary:
      "bg-twitter-neutral-50 hover:bg-twitter-neutral-200 disabled:hover:bg-twitter-neutral-50 text-black",
    secondary:
      "bg-twitter-blue hover:bg-twitter-blue-hover disabled:hover:bg-twitter-blue text-twitter-neutral-50",
  };

  const disabledStyle = disabled ? "disabled:opacity-50" : "";

  if(variant === "icon") {
    return <button {...rest}>{children}</button>;
  }

  let style = "";

  if(text === "Edit profile") {
    style = buttonVariant[variant]["Edit profile"];
  } else {
    style = `${basestyle} ${buttonVariant[variant]?.[text]} ${colorType?.[type]} ${disabledStyle}`;
  }

  return <button className={style} disabled={disabled} {...rest}>{text}{children}</button>;
};

export default Button;
