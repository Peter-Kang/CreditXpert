import "./Assets/CenterObject.css";
import Draggable from "react-draggable";
import { useRef, useState, React } from "react";

export const CenterObject = (props) => {
  let initClass = "";
  const [position, setPosition] = useState({ x: 0, y: 0 });
  if (props.shapeList?.length > 0) {
    initClass = props.shapeList[0];
  }
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
    let windowWidthRatio = 0;
    let windowHeightRatio = 0;
    if (window.innerWidth != 0) {
      windowWidthRatio = (2 * Math.abs(position.x)) / window.innerWidth;
    }
    if (window.innerHeight != 0) {
      windowHeightRatio = (2 * Math.abs(position.y)) / window.innerHeight;
    }
    const currentSchemeName = document
      .getElementById("centerObject")
      .getAttribute("colorscheme");
    const currentScheme = props.colorSchemeCollection[currentSchemeName];
    const ratioToUse =
      windowWidthRatio > windowHeightRatio
        ? windowWidthRatio
        : windowHeightRatio;
    console.log(props);
    const indexToUse = Math.floor(ratioToUse * (currentScheme.length - 1));
    console.log(props.colorSchemeCollection[currentSchemeName][indexToUse]);
    document.getElementById("centerObject").style.background =
      props.colorSchemeCollection[currentSchemeName][indexToUse];
  };

  const nodeRef = useRef(null); // for getting Draggable
  return (
    <Draggable nodeRef={nodeRef} onDrag={(e, data) => trackPos(data)}>
      <div
        ref={nodeRef}
        id="centerObject"
        className={initClass}
        colorscheme=""
      ></div>
    </Draggable>
  );
};
