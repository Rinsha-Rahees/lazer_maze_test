import React from "react";
import Background from "./Background";
import { gameDesc } from "../utils/Constants";
import Description from "./Description";
import Instructions from "./Instructions";

function Home() {
  return (
    <Background>
      <div className="flex justify-center items-center md:w-[50%] md:h-[50%] text-white">
        <img
          className="absolute md:w-[70%] lg:w-[60%] h-fit"
          src={new URL("/assets/section.png", import.meta.url).href}
          alt="Game Info"
        />
        {/* <div className="relative w-fit -left-24 lg:-left-32 2xl:-left-56z-10">
          <img
            className="w-80 2xl:w-96"
            src={new URL("/assets/gamer.png", import.meta.url).href}
            alt="Gamer Image"
          />
          <img
            className="absolute top-0 left-1 lg:w-[193px] xl:w-[214px] 2xl:w-[290px]"
            src={new URL("/assets/gamer_border.png", import.meta.url).href}
            alt="Gamer Image Border"
          />
          <img
            className="absolute bottom-5 left-5 w-20"
            src={new URL("/assets/logo.png", import.meta.url).href}
            alt="Gamer Image"
          />
        </div>
       <Description desc={gameDesc}/> */}

       <Instructions/>

      </div>
    </Background>
  );
}

export default Home;
