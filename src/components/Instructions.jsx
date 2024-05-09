import React from "react";
import Button from "./Button";
import { instructions } from "../utils/Constants";
import { Link } from "react-router-dom";

function Instructions() {
  return (
    <div className="relative lg:w-full h-fit 2xl:text-xl">
      <h2 className="font-extrabold text-xl 2xl:text-3xl tracking-widest">
        INSTRUCTIONS
      </h2>
      <ol className="" style={{ listStyleType: "number" }}>
        {instructions.map((instruction, i) => {
          return (
            <li
              key={`instruction_${i}`}
              className="w-full font-extralight text-sm m-5">
              {instruction}
            </li>
          );
        })}
      </ol>
      <div className="flex justify-center w-full">
        <div className="flex justify-between w-[60%]">
          <Link to={"/"}>
            <Button>Go Back</Button>
          </Link>
          <Button>Start Game</Button>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
