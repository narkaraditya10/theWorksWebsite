import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import Donut3 from "../assets/shapes/donut3";

function About() {
  return (
    <div className=" flex justify-center items-center relative w-full ">
      <div className="flex justify-center items-center flex-col max-w-[1400px] w-[90%] md:w-[80%]">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[90px] md:text-[100px] tracking-wider font-extrabold text-[#aaaaaa] h-[80px] md:h-[60px]">
            ABOUT
          </h1>
          <h3 className=" text-[30px] md:text-[48px] font-medium">This is the one page polo</h3>
          <p className=" w-[300px] md:w-[900px] text-[12px] md:text-[19px] text-[#757575] font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="about-btn">More Info</button>
            <button className="about-btn">Join Experiance</button>
          </div>
        </div>
        <div className="flex flex-col w-full  ">
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 w-full z-10">
            <div className="about-box">
              <FaStarHalfStroke size={100} />
              <label>Responsive Design</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
                neque vulputate, efficitur dui vitae, vehicula diam. Donec dui
                libero.
              </p>
            </div>
            <div className="about-box">
              <FaStarHalfStroke size={100} />
              <label>Responsive Design</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
                neque vulputate, efficitur dui vitae, vehicula diam. Donec dui
                libero.
              </p>
            </div>
            <div className="about-box">
              <FaStarHalfStroke size={100} />
              <label>Responsive Design</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
                neque vulputate, efficitur dui vitae, vehicula diam. Donec dui
                libero.
              </p>
            </div>
          </div>
          <Donut3 />
          <div className="flex flex-col justify-center text-center mt-[50px]">
            <label className="text-[26px] font-medium capitalize">
              here's some impressive numbers about us
            </label>
            <div className="flex justify-around mt-[50px]">
              <div>
                <label className="text-[22px] font-bold">4369</label>
                <p className="text-[12px] font-medium text-[#9e9d9d]">
                  Project completed
                </p>
              </div>
              <div>
                <label className="text-[22px] font-bold">4369</label>
                <p className="text-[12px] font-medium text-[#9e9d9d]">
                  Project completed
                </p>
              </div>
              <div>
                <label className="text-[22px] font-bold">4369</label>
                <p className="text-[12px] font-medium text-[#9e9d9d]">
                  Project completed
                </p>
              </div>
              <div>
                <label className="text-[22px] font-bold">4369</label>
                <p className="text-[12px] font-medium text-[#9e9d9d]">
                  Project completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
