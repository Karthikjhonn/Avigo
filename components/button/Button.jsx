import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import React from "react";
import styles from "../../assets/style/Style";
const clickMe = () => {
  alert("click me");
};
export const SolidButton = ({
  onPress = clickMe,
  title = "click me",
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.solidBtn, style]}
      android_ripple={{ color: "#ffffff80" }}
    >
      <Text className={"m-auto text-white text-lg font-medium"}>{title}</Text>
    </Pressable>
  );
};
