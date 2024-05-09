import React, { useEffect, useState } from "react";
import Background from "./Background";

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
      {display && (
        <div className="flex items-center justify-center">
          <img
            className=" w-56 h-56"
            src={new URL("/assets/ellipse.png", import.meta.url).href}
            alt="Timer Ring"
          />
          <span className="absolute text-9xl font-bold text-white">
            0{count}
          </span>
        </div>
      )}
    </Background>
  );
}

export default GameStartsIn;
