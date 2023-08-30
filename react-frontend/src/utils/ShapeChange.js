export const shapeChange = (selectedOption) => {
  const center = document.getElementById("CenterObject");
  if (center) {
    const selectedText =
      selectedOption.currentTarget[selectedOption.target.selectedIndex].value;
    center.setAttribute("class", selectedText);
  }
};
