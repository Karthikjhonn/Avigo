import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import React from "react";
import AvailableFlights from "./AvailableFlights";
import BookingPage from "./index";

export default function FlightStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="booking"
        component={BookingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Av" component={AvailableFlights} options={{title:"Available Flight"}} />
    </Stack.Navigator>
  );
}
