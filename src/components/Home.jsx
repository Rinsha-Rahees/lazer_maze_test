import React from "react";
import Background from "./Background";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <Background>
      <div className="flex justify-center items-center md:w-[50%] md:h-[50%] text-white">
        <Outlet />
      </div>
    </Background>
  );
}

export default Home;
