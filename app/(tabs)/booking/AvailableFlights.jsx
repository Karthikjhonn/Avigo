import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function AvailableFlights() {
  return (
    <View className="mt-12 p-4">
      <ScrollView>
        <View className="justify-between flex-row items-center">
          <View>
            <Text className="text-sm font-normal text-gray-400 capitalize">
              departure from
            </Text>
            <Text className="text-xl font-semibold uppercase">che</Text>
          </View>
          <View className="">
            <Image source={require('../../../assets/avigoimage/Vector 3.png')}  className="object-contain mx-auto" />
          </View>
          <View>
            <Text className="text-sm font-normal text-gray-400 capitalize text-right">
              arrival to
            </Text>
            <Text className="text-xl font-semibold uppercase text-right">
              blr
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
