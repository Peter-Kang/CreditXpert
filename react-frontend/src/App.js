import logo from "./logo.svg";
import "./App.css";

import { useShapes } from "./hooks/useShapes.js";
import { DropDown } from "./components/DropDown.jsx";
import { CenterObject } from "./components/CenterObject";
import { shapeChange } from "./utils/ShapeChange.js";

function App() {
  const shapes = useShapes();
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
        <DropDown name="Color Scheme" id="color"></DropDown>
        <CenterObject shapeList={shapes}></CenterObject>
      </main>
    </div>
  );
}

export default App;
