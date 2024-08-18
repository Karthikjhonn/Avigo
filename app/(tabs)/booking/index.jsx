import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Trip from '../../../components/trip/Trip'
import { StatusBar } from "expo-status-bar";
export default function BookingPage() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView>
        <View className={"p-4 space-y-6 pt-8 flex-row justify-between items-center mb-10"}>
          <View className="">
            <Text className={"text-2xl font-light"}>Explore your </Text>
            <Text className={"font-normal text-2xl"}>New Destination</Text>
          </View>
          <View className={'w-14 h-14 justify-center items-center rounded-full bg-gray-800  mb-3'}>
            <Feather name="arrow-up-right" size={32} color="white" />
          </View>
        </View>
        <Trip/>
        <StatusBar style="inverted" />
      </ScrollView>
    </SafeAreaView>
  );
}
