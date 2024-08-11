import { View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useContext, useState } from "react";
import { Redirect, Tabs } from "expo-router";
import styles from "../../assets/style/Style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import { userAuth } from "../../context/AuthContext";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
export default function _layout() {
  const team = "#AE2012";
  const { user } = userAuth();
  if (!user) {
    return <Redirect href="login" />;
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: team,
        tabBarStyle: {
          minHeight: 64,
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Flights",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="airplane" size={20} color={color} />
          ),

        }}
      />

      <Tabs.Screen
        name="booking/index"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={20} color={color} />
          ),
          
        }}
      />
      <Tabs.Screen
        name="myticket/index"
        options={{
          title: "Tickets",
          tabBarIcon: ({ color }) => (
            <Fontisto name="plane-ticket" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="support/index"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-sharp" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-large" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
