import React from "react";
import "./Assets/CenterObject.css";

export const CenterObject = (props) => {
  let initClass = "";
  if (props.shapeList?.length > 0) {
    initClass = props.shapeList[0];
  }
  return (
    <div id="centerObject" className={initClass}>
      <div id="centerObjectHeader"></div>
    </div>
  );
};
