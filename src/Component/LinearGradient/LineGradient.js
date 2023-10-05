import React from "react";

const LineGradient = ({ width = "100%" }) => {
const lineStyle = {
height: "4px",
width: width,
background: "linear-gradient(to right, #5d015d, rgb(28, 162, 203), #EB541B ,#71797E)"
};
return <div style={lineStyle}></div>;
}
export default LineGradient;