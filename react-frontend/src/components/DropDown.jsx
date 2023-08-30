import React from "react";
import "./Assets/DropDown.css";

export const DropDown = (props) => {
  return (
    <div>
      <label>{props.name}:</label>
      <select id={props.id}>
        {props.shapeList?.map((shape, index) => (
          <option key={index} value="shape">
            {" "}
            {shape}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};
