import React from "react";
import Donut from "../assets/shapes/donut";
import Donut2 from "../assets/shapes/donut2";
import Circle from "../assets/shapes/circle";

function Hero() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center overflow-hidden">
        <div className="hero-container">
          <div className="hero-left-section">
            <h1 className=" text-[34px] md:text-[56px] font-extrabold leading-[30px] md:leading-[56px] uppercase z-10 relative" >
             <Circle/> Creative <br /> and Professional
            </h1>
            <p className="text-[18px] font-medium left-5 text-[#3f3f3f]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
            <button className="px-4 py-2 w-fit border-[2px] border-[#000] rounded-md text-[20px] font-medium ">Contact us</button>
            <Donut2 />
            
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
