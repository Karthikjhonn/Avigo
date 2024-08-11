import { View, Text } from "react-native";
import React from "react";

export default function FormError({ error, type }) {
  if (error) {
    return (
      <Text
        className={`${
          type == "success" ? "text-green-400" : "text-red-400"
        }  text-base`}
      >
        {error}
      </Text>
    );
  }
  return <Text className={`text-base invisible opacity-0`}>--</Text>;
}
