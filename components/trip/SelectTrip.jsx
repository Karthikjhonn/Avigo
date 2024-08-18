import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function SelectTrip() {
  const [trip, setTrip] = useState(1);
  const activeClass = "border-white border-t-[#62c2da] border-l-[#84c4d4]";
  return (
    <View className="justify-between flex-row items-center">
      <TouchableOpacity onPress={() => setTrip(1)} activeOpacity={0.7}>
        <Text
          className={`capitalize text-base min-h-[42px] items-center font-light text-white px-3 py-1 border border-transparent rounded-[20px] ${
            trip === 1 ? activeClass : ""
          }`}
        >
          One-way
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTrip(2)} activeOpacity={0.7}>
        <Text
          className={`capitalize text-base min-h-[42px] items-center font-light text-white px-3 py-1 border border-transparent rounded-[20px] ${
            trip === 2 ? activeClass : ""
          }`}
        >
          round trip
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTrip(3)} activeOpacity={0.7}>
        <Text
          className={`capitalize text-base min-h-[42px] items-center font-light text-white px-3 py-1 border border-transparent rounded-[20px] ${
            trip === 3 ? activeClass : ""
          }`}
        >
          multi city
        </Text>
      </TouchableOpacity>
    </View>
  );
}
