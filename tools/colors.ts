import { RandomColors } from "../types/colors";

export const getRandomColors = (): RandomColors => {
  const colors: RandomColors = {
    backgroundColor: "",
    titleColor: "rgb(0,0,0)",
    statusBarColor: "dark",
  };
  const red = getRandomRGB();
  const green = getRandomRGB();
  const blue = getRandomRGB();

  colors.backgroundColor = `rgb(${red},${green},${blue})`;

  if (red < 100 && green < 100 && blue < 100) {
    colors.titleColor = "rgb(255,255,255)";
    colors.statusBarColor = "light";
  }

  console.log(colors);
  return colors;
};

export const getRandomRGB = (): number => {
  const min = 0;
  const max = 255;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};
