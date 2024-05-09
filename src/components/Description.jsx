import React from 'react'
import Button from './Button'

function Description({desc}) {
  return (
    <div className="relative lg:w-full h-fit 2xl:text-xl">
    <h2 className="font-extrabold text-xl 2xl:text-3xl tracking-widest">
      LASERTAG
    </h2>
    <p className="font-extralight xl:mt-3 xl:leading-6">
     {desc}
    </p>
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
     <Button>How to Play</Button>
     <Button>Start Game</Button>
    </div>
  </div>
  )
}

export default Description