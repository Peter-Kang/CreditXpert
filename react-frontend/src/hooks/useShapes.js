import { useEffect, useState } from "react";

export const useShapes = () => {
  const [shapeList, setShapeList] = useState([]);
  useEffect(() => {
    const getShapes = async () => {
      const response = await fetch("https://localhost:7165/api/Shapes");
      const result = await response.json();
      setShapeList(result);
    };
    getShapes();
  }, []);
  return shapeList;
};
