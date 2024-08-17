import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import HomeFlightView from "../../../components/cards/HomeFlightView";
import HomeNextFlightCard from "../../../components/cards/HomeNextFlightCard";
import HomeCarousel from '../../../components/cards/HomeCarousel'
export default function Homepage() {
  const [userdetails, setUserDetails] = useState(null);

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
    fetchUser();
  }, []);
  let smallCard = [];
  for (let index = 0; index < 20; index++) {
    smallCard.push(<View key={index} className={'mb-4'}><HomeNextFlightCard  /></View>);
  }
  const themColor = "#AE2012";
  return (
    <SafeAreaView className={"bg-white  flex-1 relative"}>
      <ScrollView>
        <StatusBar style="light" backgroundColor={themColor} />
        <View className={"p-4 pt-6 flex flex-row items-center z-10 "}>
          <View className={"flex-1 items-center bg-green- 500 flex-row space-x-2"}>
            <TouchableOpacity>
              <Image
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                className={"w-12 h-12 basis-12 rounded-full object-cover "}
              />
            </TouchableOpacity>
            <View>
              <Text className={"text-base font-medium text-white"}>
                {userdetails?.Name}
              </Text>
              <View className={"flex flex-row gap-x-1 mt-1"}>
                <MaterialCommunityIcons
                  name="weather-partly-snowy-rainy"
                  size={20}
                  color="rgba(255, 255, 255, 0.9)"
                />
                <Text className={"text-xs font-light text-white"}>36' c</Text>
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  size={20}
                  color="rgba(255, 255, 255, 0.9)"
                />
                <Text className={"text-xs font-light text-white capitalize"}>
                  Chennai
                </Text>
              </View>
            </View>
          </View>
          <View className={"ms-auto  flex flex-row gap-x.5"}>
            <TouchableOpacity
              className={
                "w-12 h-12 rounded-full flex justify-center items-center active:bg-zinc-50"
              }
            >
              <Ionicons
                name="notifications-outline"
                size={24}
                color="white"
                className={"m-auto"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className={
                "w-12 h-12 rounded-full flex justify-center items-center active:bg-zinc-50"
              }
            >
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View className={"relative py-12 px-0 w-full z-10"}>
          <HomeCarousel/>
        </View>
        <View
          className={"bg-cocoa-500 absolute top-0 w-full h-4/6 max-h-[480px]"}
        ></View>
        <View className={"p-4"}>
          
          <Text h1 className={"text-base font-medium tracking-wide capitalize"}>
            Next flights
          </Text>
          <View className={"space-y-4 mt-4"}>
            {smallCard ? smallCard : null}
          </View>

          {/* <View className={"h-96"}></View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
