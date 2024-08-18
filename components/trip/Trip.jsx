import { View, Text } from "react-native";
import React from "react";
import SelectTrip from "./SelectTrip";
import Destination from "./Destination";
import SelectDate from "./SelectDate";
import SelectClass from "./SelectClass";
import { SolidButton } from "../button/Button";
import { router } from "expo-router";

export default function Trip() {
  return (
    <View className="p-4">
      <View className="p-3.5 py-5 bg-cocoa-500 rounded-2xl">
        <SelectTrip />
        <Destination />
      </View>
      <View className="flex-row  mt-10 justify-between">
        <SelectDate />
        <SelectClass />
      </View>
      <View className="mt-10 mb-4"> 
        <SolidButton title="Get Flights" onPress={()=>{}} />
      </View>
    </View>
  );
}
