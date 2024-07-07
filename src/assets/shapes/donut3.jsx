import React from "react";

function Donut3() {
  return (
    <div className="absolute left-[-450px] md:bottom-[-150px] w-fit overflow-hidden">
      <div
        class={`w-[650px] h-[650px] bg-[#faff00] relative shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-[50%] before:content-[''] before:absolute before:w-[450px] before:h-[450px] before:bg-[#fff] before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-[50%] before:left-2/4 before:top-2/4`}
      >
        <div class="hole"></div>
      </div>
    </div>
  );
}

export default Donut3;
