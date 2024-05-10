import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import LoaderPage from "./LoaderPage";

function Instructions() {
  const [gameInstruction, setGameInstruction] = useState();

  const gameData = async () => {
    //CORS Proxy added, valid for 3 days

    const data = await fetch(
      "https://proxy.cors.sh/https://378027ioph.execute-api.ap-south-1.amazonaws.com/test/Users?id=ec14dcc2-304d-4052-a177-01d68dd6a952",
      {
        headers: {
          "x-cors-api-key": "temp_95d621e92733b3abf114390980df1c10",
        },
      }
    );
    const result = await data.json();
    setGameInstruction(result?.Game?.playInstruction);
  };

  useEffect(() => {
    gameData();
  }, []);

  return gameInstruction ? (
    <>
      <img
        className="absolute w-full h-[60%] md:h-fit lg:w-[60%]"
        src={new URL("/assets/section.png", import.meta.url).href}
        alt="Game Info"
      />
      <div className="relative lg:w-full h-fit 2xl:text-xl">
        <h2 className="font-extrabold text-xl 2xl:text-3xl tracking-widest">
          INSTRUCTIONS
        </h2>
        <ol style={{ listStyleType: "number" }}>
          <li className="w-full font-extralight text-sm m-5">
            {gameInstruction}
          </li>
        </ol>
        <div className="flex justify-center w-full">
          <div className="flex justify-between w-[60%]">
            <Link to={"/"}>
              <Button>Go Back</Button>
            </Link>
            <Link to={"/startgame"}>
              <Button>Start Game</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <LoaderPage />
  );
}

export default Instructions;
