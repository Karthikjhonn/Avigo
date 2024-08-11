import React from "react";
import { ActivityIndicator } from "react-native";
import colors from "tailwindcss/colors";

const getColorValue = (color) => {
  if (color in colors) {
    return colors[color];
  }
  const [baseColor, shade] = color.split("-");
  if (baseColor in colors && shade) {
    return colors[baseColor][shade];
  }
  return color;
};

export default function Loader({ size = "small", color = "yellow-500" }) {
  const colorValue = getColorValue(color);
  return <ActivityIndicator size={size} color={colorValue} />;
}
