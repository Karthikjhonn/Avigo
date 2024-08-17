import { View, Text,  ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookingPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className={"p-4 space-y-6"}>
          <Text>MyBooking</Text>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
