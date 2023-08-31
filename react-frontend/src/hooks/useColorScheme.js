import { useEffect, useState } from "react";

export const useColorScheme = () => {
  const [colorList, setColorScheme] = useState([]);
  useEffect(() => {
    const getColorScheme = async () => {
      const response = await fetch("https://localhost:7165/api/ColorScheme");
      const result = await response.json();
      setColorScheme(result);
    };
    getColorScheme();
  }, []);
  return colorList;
};
