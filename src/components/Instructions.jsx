import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useSearchParams } from "react-router-dom";

function Instructions() {

  const [instruction, setInstruction] = useState()

  const gameData = async () => {
    const data = await fetch(
      "https://378027ioph.execute-api.ap-south-1.amazonaws.com/test/Users?id=ec14dcc2-304d-4052-a177-01d68dd6a952"
    );
    console.log(data);
    const result = await data.json();
    setInstruction(result?.Game?.playInstruction)
  };

  useEffect(() => {
    gameData();
  }, []);

  return (
    <div className="relative lg:w-full h-fit 2xl:text-xl">
      <h2 className="font-extrabold text-xl 2xl:text-3xl tracking-widest">
        INSTRUCTIONS
      </h2>
      <ol style={{ listStyleType: "number" }}>
        <li className="w-full font-extralight text-sm m-5">
          {instruction}
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
  );
}

export default Instructions;
