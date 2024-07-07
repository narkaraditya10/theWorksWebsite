import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Experts() {
  return (
    <div className="my-[100px] flex flex-col justify-center">
      <span className="text-center">
        <h1 className="text-[80px] md:text-[100px] tracking-wide font-extrabold text-[#dad9d9] h-[80px] uppercase">
          Expert
        </h1>
        <h3 className="text-[22px] md:text-[30px] font-medium">
          Meet Our team
        </h3>
      </span>
      <div className="flex justify-center">
        <div className=" w-fit   grid grid-cols-1 md:grid-cols-3 relative ">
          <div className="flip-card">
            <div className="flip-card-front">
              <div className="inner">
                <img src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <span className="w-full my-3 px-4">
                  <h3>Roberts Williams</h3>
                  <p>Web developer</p>
                </span>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="inner">
                <h3>Roberts Williams</h3>
                <p>Web developer</p>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </label>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-front">
              <div className="inner">
                <img src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <span className="w-full my-3 px-4">
                  <h3>Roberts Williams</h3>
                  <p>Web developer</p>
                </span>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="inner">
                <h3>Roberts Williams</h3>
                <p>Web developer</p>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </label>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-front">
              <div className="inner">
                <img src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <span className="w-full my-3 px-4">
                  <h3>Roberts Williams</h3>
                  <p>Web developer</p>
                </span>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="inner">
                <h3>Roberts Williams</h3>
                <p>Web developer</p>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experts;
