import { View, Text } from "react-native";
import React from "react";
import First from '../../components/first'
export default function Test() {
  return (
    <View>
      <Text>Test</Text>
      <Text className="bg-emerald-400 ">Hello world</Text>
      <First/>
    </View>
  );
}
