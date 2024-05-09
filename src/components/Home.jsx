import React from "react";
import Background from "./Background";
import Instructions from "./Instructions";
import Description from "./Description";
import { gameDesc } from "../utils/Constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <Background>
      <div className="flex justify-center items-center md:w-[50%] md:h-[50%] text-white">
        <img
          className="absolute md:w-[70%] lg:w-[60%] h-fit"
          src={new URL("/assets/section.png", import.meta.url).href}
          alt="Game Info"
        />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Description desc={gameDesc} />} />
            <Route path="/instruction" element={<Instructions />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Background>
  );
}

export default Home;
