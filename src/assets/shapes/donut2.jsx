import React from "react";

function Donut2() {
  return (
    <div className="absolute md:left-[50%] right-0 bottom-[100px] md:bottom-[250px] w-[60px] overflow-hidden">
      <div
        class={`w-[100px] h-[100px] bg-[#faff00] relative shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-[50%] before:content-[''] before:absolute before:w-[70px] before:h-[70px] before:bg-[#fff] before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-[50%] before:left-2/4 before:top-2/4`}
      >
        <div class="hole"></div>
      </div>
    </div>
  );
}

export default Donut2;
