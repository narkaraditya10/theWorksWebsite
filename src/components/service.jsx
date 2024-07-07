import React from "react";
import { FaGear } from "react-icons/fa6";
import service from "../assets/image/service.png";

function Service() {
  return (
    <div className="my-[100px] flex justify-center">
      <div className="max-w-[1400px] w-[90%] md:w-[80%] flex flex-col md:flex-row ">
        <div className="md:w-[50%] hidden md:flex items-end ">
          <img src={service} alt="" className=" h-fit  " />
        </div>

        <div className="md:w-[50%] ">
          <span className="text-center">
            <h1 className="text-[80px] md:text-[100px] tracking-wide font-extrabold text-[#dad9d9] h-[80px] uppercase">
              Service
            </h1>
            <h3 className="text-[22px] md:text-[30px] font-medium">
              Clean Idea and Unique Design
            </h3>
          </span>

          <div className="md:w-[50%] md:hidden flex items-end ">
            <img src={service} alt="" className=" h-fit  " />
          </div>

          <div className="grid grid-cols-2 mt-[50px]">
            <div className="w-full h-[200px] flex flex-col justify-center items-center text-center gap-2 border-r border-b  ">
              <FaGear color="#aaaaaa" size={22} />

              <label className="text-[18px] font-medium">
                Excellent Features{" "}
              </label>
              <p className="md:w-[220px] text-[14px] font-medium text-[#aaa]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center gap-2 border-l border-b ">
              <FaGear color="#aaaaaa" size={22} />

              <label className="text-[18px] font-medium">
                Excellent Features{" "}
              </label>
              <p className="md:w-[220px] text-[14px] font-medium text-[#aaa]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-full h-[200px] flex flex-col justify-center items-center text-center gap-2 border-r border-t  ">
              <FaGear color="#aaaaaa" size={22} />

              <label className="text-[18px] font-medium">
                Excellent Features{" "}
              </label>
              <p className="md:w-[220px] text-[14px] font-medium text-[#aaa]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center gap-2 border-l border-t ">
              <FaGear color="#aaaaaa" size={22} />

              <label className="text-[18px] font-medium">
                Excellent Features{" "}
              </label>
              <p className="md:w-[220px] text-[14px] font-medium text-[#aaa]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
