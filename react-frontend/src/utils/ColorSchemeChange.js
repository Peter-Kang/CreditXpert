export const colorSchemeChange = (selectedOption) => {
  const center = document.getElementById("centerObject");
  if (center) {
    const selectedText =
      selectedOption.currentTarget[selectedOption.target.selectedIndex].value;
    console.log(selectedText);
    center.setAttribute("colorscheme", selectedText);
  }
};
