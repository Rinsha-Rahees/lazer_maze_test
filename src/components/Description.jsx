import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Description({ desc }) {
  return (
    <>
      <div className="relative w-fit -left-24 lg:-left-32 2xl:-left-56z-10">
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
      <div className="relative lg:w-full h-fit 2xl:text-xl">
        <h2 className="font-extrabold text-xl 2xl:text-3xl tracking-widest">
          LASERTAG
        </h2>
        <p className="font-extralight xl:mt-3 xl:leading-6">{desc}</p>
        <div className="flex flex-col xl:w-[60%] leading-5 my-4 xl:leading-10 xl:my-6">
          <div className="flex justify-between">
            <span>Duration</span>
            <span className="font-semibold">9 to 15 mins</span>
          </div>
          <div className="flex justify-between">
            <span>Maximum Players</span>
            <span className="font-semibold">12 Players</span>
          </div>
        </div>
        <div className="flex justify-between w-[80%]">
          <Link to={"/instruction"}>
            <Button>How to Play</Button>
          </Link>
          <Button>Start Game</Button>
        </div>
      </div>
    </>
  );
}

export default Description;
