import React, { useEffect, useState } from "react";
import Background from "./Background";
import { Oval } from "react-loader-spinner";

function GameStartsIn() {
  const [count, setCount] = useState(3);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    if (count === 0) {
      setDisplay(false);
    }
    if (count >= 1) {
      setTimeout(() => {
        setCount(count - 1);
      }, 500);
    }
  }, [count]);

  return (
    <Background>
      {
        display &&
        <div className="flex flex-col items-center justify-center text-white">
          <span className="font-semibold text-2xl">Game starting in...</span>
          <img
            className="mt-8 w-52 h-52"
            src={new URL("/assets/ellipse.png", import.meta.url).href}
            alt="Timer Ring"
          />
          <span className="absolute mt-10 text-9xl font-semibold">
            0{count}
          </span>
          <div className="absolute mt-16">
            <Oval
              visible={true}
              height="220"
              width="220"
              color="#ffffff"
              secondaryColor="transparent"
              ariaLabel="oval-loading"
            />
          </div>
        </div>
      }
    </Background>
  );
}

export default GameStartsIn;
