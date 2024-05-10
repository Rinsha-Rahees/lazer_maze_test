import React from "react";

function Background({ children }) {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-cover bg-[url('/assets/bg.png')]">
      {children}
    </div>
  );
}

export default Background;
