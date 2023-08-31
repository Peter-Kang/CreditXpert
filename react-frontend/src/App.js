import logo from "./logo.svg";
import "./App.css";

import { useShapes } from "./hooks/useShapes.js";
import { DropDown } from "./components/DropDown.jsx";
import { CenterObject } from "./components/CenterObject";
import { shapeChange } from "./utils/ShapeChange.js";
import { useColorScheme } from "./hooks/useColorScheme.js";
import { colorSchemeChange } from "./utils/ColorSchemeChange";
import { useEffect } from "react";

function App() {
  const shapes = useShapes();
  const colorScheme = useColorScheme();
  const colorSchemeNames = Object.keys(colorScheme);

  //initialize the object's color and color scheme
  let initColorScheme = "";
  let initColorSchemeList = [];
  if (colorSchemeNames?.length > 0) {
    const colorListNames = colorSchemeNames;
    initColorScheme = colorListNames[0];
    initColorSchemeList = colorScheme[initColorScheme];
    const initColor = initColorSchemeList[0];
    document.getElementById("centerObject").style.background = initColor;
    document
      .getElementById("centerObject")
      .setAttribute("colorscheme", initColorScheme);
    console.log(initColorScheme);
  }
  if (shapes?.length > 0) {
    const center = document.getElementById("centerObject");
    center.setAttribute("shape", shapes[0]);
  }
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://unpkg.com/open-props/normalize.dark.min.css"
        />
      </header>
      <main>
        <DropDown
          name="Shape"
          id="shape"
          optionsList={shapes}
          changeFunction={shapeChange}
        ></DropDown>
        <DropDown
          name="Color Scheme"
          id="color"
          optionsList={colorSchemeNames}
          changeFunction={colorSchemeChange}
        ></DropDown>
        <CenterObject
          shapeList={shapes}
          colorSchemeCollection={colorScheme}
        ></CenterObject>
      </main>
    </div>
  );
}

export default App;
