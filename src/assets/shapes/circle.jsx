import React from "react";

function Circle() {
  const circleStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "#ff6347",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
  };

  return <div style={circleStyle}></div>;
}

export default Circle;
