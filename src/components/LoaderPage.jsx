import React from "react";
import { Vortex } from "react-loader-spinner";

function LoaderPage() {
  return (
    <>
      <div className="absolute animate-pulse">
        <div className="relative w-fit h-fit top-0">
          <img
            src={new URL("/assets/gamer.png", import.meta.url).href}
            alt="Gamer Image"
          />
          <img
            className="absolute top-0 left-2"
            src={new URL("/assets/gamer_border.png", import.meta.url).href}
            alt="Gamer Image Border"
          />
          <img
            className="absolute bottom-5 left-5 w-20"
            src={new URL("/assets/logo.png", import.meta.url).href}
            alt="Laser Maze Logo"
          />
        </div>
      </div>
      <div className="absolute">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    </>
  );
}

export default LoaderPage;
