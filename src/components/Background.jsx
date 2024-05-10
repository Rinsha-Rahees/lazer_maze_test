import React from "react";

function Background({ children }) {
  const parallax = (e) => {
    const elements = document.querySelectorAll(".parallax");
    elements.forEach((element) => {
      const movingValue = element.getAttribute("data-value");
      const x = (e.clientX * movingValue) / 250;
      const y = (e.clientY * movingValue) / 250;
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-cover bg-[url('/assets/bg.png')]" onMouseMove={parallax}>
      <img
        className="parallax absolute top-10 left-24 w-24 animate-pulse"
        src={new URL("/assets/rocket.png", import.meta.url).href}
        alt="Rocket"
        data-value="-5"
      />
      <img
        className="parallax absolute bottom-12 left-10 w-24 animate-pulse"
        src={new URL("/assets/galaxy.png", import.meta.url).href}
        alt="Galaxy"
        data-value="-3"
      />
  
      <img
        className="parallax absolute top-56 left-32 w-24 animate-pulse"
        src={new URL("/assets/earth.png", import.meta.url).href}
        alt="Earth"
        data-value="2"
      />
      <img
        className="parallax absolute top-44 right-44 w-56 animate-pulse"
        src={new URL("/assets/planet.png", import.meta.url).href}
        alt="Planet"
        data-value="2"
      />
      <img
        className="parallax absolute top-10 right-10 w-32 animate-pulse"
        src={new URL("/assets/space.png", import.meta.url).href}
        alt="Space"
        data-value="3"
      />
      <img
        className="parallax absolute bottom-10 right-24 w-24 animate-pulse"
        src={new URL("/assets/solar-system.png", import.meta.url).href}
        alt="Solar System"
        data-value="4"
      />
      {children}
    </div>
  );
}

export default Background;
