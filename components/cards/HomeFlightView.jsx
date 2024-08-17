import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { BlurView } from "expo-blur";
export default function HomeFlightView() {
  const test = [{id:1},{id:1},{id:1},{id:1},{id:1}]

  return (
    <BlurView
      className={
        "bg-white/[30%] overflow-hidden p-4 pb-0 rounded-[30px] border border-white/50 flex space-y-6"
      }
      intensity={30}
    >
      <BlurView
        className={
          " bg-white/[23%] overflow-hidden mx-auto w-40 h-40 rounded-full flex justify-center items-center mt-6 border-[3px] border-cocoa-500 "
        }
        intensity={10}
      >
        <Text
          className={"text-xl uppercase text-white font-semibold text-center"}
        >
          blr
        </Text>
        <TouchableOpacity
          className={
            "w-10 h-10 flex justify-center items-center active:bg-zinc-50 rounded-full mx-auto"
          }
        >
          <Ionicons name="swap-vertical" size={24} color="white" />
        </TouchableOpacity>
        <Text
          className={"text-xl uppercase text-white font-semibold text-center"}
        >
          blr
        </Text>
      </BlurView>
      <ImageBackground
        className={"space-y-6 pt-8 pb-12 relative"}
        resizeMode="cover"
        source={require("../../assets/avigoimage/view-from-top-on-emirates-airbus-a380-w1098x1098 1.png")}
      >
        <BlurView
          className={
            "bg-[#EEEDED]/[70%] p-4 rounded-lg flex space-y-2.5 mt-auto border border-[#EEEDED]/[80%]"
          }
          intensity={10}
        >
          <View className={"flex flex-row justify-evenly"}>
            <Text
              className={"text-xs capitalize text-zinc-400 font-normal flex-1 "}
            >
              chennai
            </Text>
            <Text
              className={
                "text-xs capitalize text-black font-medium  text-center flex-1 "
              }
            >
              Mon 24/08/24
            </Text>
            <Text
              className={
                "text-xs capitalize text-zinc-400 font-normal text-right flex-1 "
              }
            >
              bangalore
            </Text>
          </View>
          <View className={"flex flex-row justify-between relative"}>
            <Text
              className={"text-xl uppercase text-black font-semibold flex-1 "}
            >
              che
            </Text>
            <View className="w-full h-1.5 my-auto bg-green -400 flex-1 ">
              <Image
                source={require("../../assets/avigoimage/Line 1.png")}
                className="w-full h-[2.5px] my-auto object-contain"
              />
            </View>
            <Text
              className={
                "text-xl uppercase text-black font-semibold ms-auto flex-1 text-right"
              }
            >
              blr
            </Text>
            <View
              className={
                "absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2"
              }
            >
              <Entypo name="aircraft-take-off" size={20} color="black" />
            </View>
          </View>
          <View className={"flex flex-row justify-between"}>
            <Text
              className={"text-xs capitalize text-zinc-400 font-normal flex-1"}
            >
              departure
            </Text>
            <Text
              className={
                "text-xs capitalize text-black font-medium flex-1 text-center"
              }
            >
              1h 16m
            </Text>
            <Text
              className={
                "text-xs capitalize text-zinc-400 font-normal ms-auto flex-1 text-right"
              }
            >
              Arrival
            </Text>
          </View>
        </BlurView>
        <BlurView
          className={
            "bg-[#EEEDED]/[70%] p-4 rounded-lg flex  mt-auto flex-row justify-between border border-[#EEEDED]/[80%]"
          }
          intensity={10}
        >
          <View className={"space-y-1.5"}>
            <Text className={"capitalize text-xs text-zinc-400"}>Name</Text>
            <Text className={"capitalize text-xs text-black"}>Air India</Text>
          </View>
          <View className={"space-y-1.5"}>
            <Text className={"capitalize text-xs text-zinc-400"}>model</Text>
            <Text className={"uppercase text-xs text-black"}>A380</Text>
          </View>
          <View className={"space-y-1.5"}>
            <Text className={"capitalize text-xs text-zinc-400"}>
              departure
            </Text>
            <Text className={"uppercase text-xs text-black"}>9.45 IST</Text>
          </View>
          <View className={"space-y-1.5"}>
            <Text className={"capitalize text-xs text-zinc-400"}>delay</Text>
            <Text className={"capitalize text-xs text-black"}>00.00</Text>
          </View>
        </BlurView>
      </ImageBackground>
    </BlurView>
  );
}

