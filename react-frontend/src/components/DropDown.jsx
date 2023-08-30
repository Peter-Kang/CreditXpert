import React from "react";
import "./Assets/DropDown.css";

export const DropDown = (props) => {
  return (
    <div>
      <label>{props.name}:</label>
      <select id={props.id} onChange={props.changeFunction}>
        {props.optionsList?.map((shape, index) => (
          <option key={index} value={shape}>
            {" "}
            {shape}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};
