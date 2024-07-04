import React from "react";
import Donut from "../assets/shapes/donut";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left-section">
          <h1 className="text-[2px]">Creative and Professional</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
        </div>
        <div className="hero-right-section">
          <Donut />
        </div>
      </div>
    </>
  );
}

export default Hero;
