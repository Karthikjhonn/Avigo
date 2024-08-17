import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";

export default function HomeNextFlightCard() {
  return (
    <View
      className={
        "bg-white/25 p-4 rounded-lg flex space-y-2.5 mt-auto border border-zinc-300/25 relative overflow-hidden"
      }
    >
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/avigoimage/flight.png")}
        className={'h-20 w-full absolute -bottom-7 opacity-20 -left-14'}
      />
      <View className={"flex flex-row justify-evenly"}>
        <Text className={"text-xs uppercase text-zinc-300 font-normal flex-1 "}>
          8.35 Am
        </Text>
        <Text
          className={
            "text-xs capitalize text-zinc-400 font-medium  text-center flex-1 "
          }
        >
          Mon 24/08/24
        </Text>
        <Text
          className={
            "text-xs uppercase text-zinc-300 font-normal text-right flex-1 "
          }
        >
          9.50 Am
        </Text>
      </View>
      <View className={"flex flex-row justify-between relative"}>
        <Text className={"text-xl uppercase text-black font-semibold flex-1 "}>
          che
        </Text>
        <View className="w-fit flex">
          <Image
            source={require("../../assets/avigoimage/Vector 2.png")}
            className="my-auto object-contain"
          />
          <Text className={"text-[10px] text-center text-zinc-300"}>
            1h 15m
          </Text>
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
        ></View>
      </View>
      <View className={"flex flex-row "}>
        <Text className={"text-sm capitalize text-zinc-300 font-medium flex-1"}>
          Air india
        </Text>

        <Text
          className={
            "text-sm capitalize text-black font-medium border-[1.5px] border-black border-t-cocoa-500 border-r-cocoa-500   rounded-full text-center px-4 py-1"
          }
        >
          A380
        </Text>
      </View>
    </View>
  );
}
