import "./Assets/CenterObject.css";
import Draggable from "react-draggable";
import { useRef, useState, React } from "react";

export const CenterObject = (props) => {
  let initClass = "";
  if (props.shapeList?.length > 0) {
    initClass = props.shapeList[0];
  }
  const [position, setPostiion] = useState({ x: 0, y: 0 });
  const trackPos = (data) => {
    setPostiion({ x: data.x, y: data.y });
    console.log(position);
  };

  const nodeRef = useRef(null); // for getting Draggable
  return (
    <Draggable nodeRef={nodeRef} onDrag={(e, data) => trackPos(data)}>
      <div ref={nodeRef} id="centerObject" className={initClass}></div>
    </Draggable>
  );
};
