import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import Homepage from "./home/index";
import BookingPage from "./booking/index";
import TicketPage from "./myticket/index";
import SupportPage from "./support/index";
import ProfilePage from "./profile/index";
import { userAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const team = "#AE2012";

  const { user } = userAuth();
  if (!user) {
    return <Redirect href="login" />;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: team,
        tabBarStyle: {
          minHeight: 64,
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 10,
          borderTopWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
        },
      }}
    >
      
      <Tab.Screen
        name="home"
        component={Homepage}
        options={{
          title: "Flights",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="airplane" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="booking"
        component={BookingPage}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="myticket"
        component={TicketPage}
        options={{
          title: "Tickets",
          tabBarIcon: ({ color }) => (
            <Fontisto name="plane-ticket" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="support"
        component={SupportPage}
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-sharp" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfilePage}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-large" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
