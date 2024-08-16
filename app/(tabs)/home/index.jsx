import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SolidButton } from "../../../components/button/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userAuth } from "../../../context/AuthContext";
import { StatusBar } from "expo-status-bar";

export default function Homepage() {
  const [userdetails, setUserDetails] = useState(null);
  const { setUser } = userAuth();
  const signOut = async () => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(false));
      setUser(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDetails = async () => {
    try {
      const userDetailsString = await AsyncStorage.getItem("userDetails");
      if (userDetailsString !== null) {
        return JSON.parse(userDetailsString);
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserDetails();
        console.log(res);
        setUserDetails(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser()
  }, []);

  return (
    <SafeAreaView className={"flex-1 justify-center items-center p-4"}>
      <StatusBar style="dark" />
      <View className={"w-full"}>
        <Text>Homepage</Text>
        <Text>{userdetails?.Name}</Text>
        
      </View>
    </SafeAreaView>
  );
}
