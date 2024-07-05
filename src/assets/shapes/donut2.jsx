import React from "react";

function Donut2() {
  return (
    <div className="absolute left-[50%] w-[120px] overflow-hidden">
      <div
        class={`w-[200px] h-[200px] bg-[#ff6347] relative shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-[50%] before:content-[''] before:absolute before:w-[150px] before:h-[150px] before:bg-[#fff] before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-[50%] before:left-2/4 before:top-2/4`}
      >
        <div class="hole"></div>
      </div>
    </div>
  );
}

export default Donut2;
