import React from "react";
import Background from "./Background";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <Background>
      <div className="flex justify-center items-center md:w-[50%] md:h-[50%] text-white">
        <img
          className="absolute md:w-[70%] lg:w-[60%] h-fit"
          src={new URL("/assets/section.png", import.meta.url).href}
          alt="Game Info"
        />
        <Outlet/>
      </div>
    </Background>
  );
}

export default Home;
