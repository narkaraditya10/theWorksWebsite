import React from "react";
import Donut from "../assets/shapes/donut";
import Donut2 from "../assets/shapes/donut2";
import Circle from "../assets/shapes/circle";

function Hero() {
  return (
    <>
    <div className="h-screen flex justify-center items-center">
    <div className="hero-container">
        <div className="hero-left-section">
          <h1 className="">Creative and Professional</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
          <Donut2/>
          <Circle/>
        </div>
        <div className="hero-right-section">
          <Donut />
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Hero;
