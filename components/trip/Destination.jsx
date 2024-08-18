import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Destination() {
  const [form, setForm] = useState({ from: "", to: "" });
  // console.log(form);
  const handleSwap = () => {
    setForm({ from: form.to, to: form.from });
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      rotateValue.setValue(0);
    });
  };
  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotateAnimation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View className="mt-7">
      <View>
        <Text className="text-base font-light capitalize text-gray-100">
          from
        </Text>
        <TextInput
          placeholder="Chennai.."
          placeholderTextColor={"#ffffff94"}
          className="text-3xl font-normal text-white"
          value={form.from}
          onChangeText={(e) => {
            setForm({ ...form, from: e });
          }}
        />
      </View>
      <View className="justify-end flex-row">
        <TouchableOpacity activeOpacity={0.7} onPress={handleSwap}>
          <Animated.View
            style={{ transform: [{ rotate: rotateAnimation }] }}
            className="bg-white w-12 h-12 rounded-full justify-center items-center"
          >
            <Ionicons name="swap-vertical" size={26} color="black" />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-base font-light capitalize text-gray-100">
          To
        </Text>
        <TextInput
          placeholder="Bangalore.."
          placeholderTextColor={"#ffffff94"}
          className="text-3xl font-normal text-white"
          value={form.to}
          onChangeText={(e) => {
            setForm({ ...form, to: e });
          }}
        />
      </View>
    </View>
  );
}
