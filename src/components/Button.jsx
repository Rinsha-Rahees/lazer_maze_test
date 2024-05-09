import React from "react";

function Button({children}) {
  return (
    <button className="relative top-0 left-0 w-fit">
      <img
        className="w-32"
        src={new URL("/assets/button.png", import.meta.url).href}
        alt="How to Play Button"
      />
      <span className="absolute top-0 left-0 p-2 flex justify-center w-full">
        {children}
      </span>
    </button>
  );
}

export default Button;
