import React, { useEffect } from "react";
import { View, Text, Pressable, Button, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { userAuth } from "../context/AuthContext";
import { SolidButton } from "../components/button/Button";
import { FadeIn, FadeOut,FadeInDown } from "react-native-reanimated";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
export default function Page() {
  const { user, setUser } = userAuth();

  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        router.replace("/home");
      } else {
        router.replace("/login");
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [user, router, setUser]);
  return (
    <View className="flex-1 justify-center items-center bg-cocoa-500 p-3">
      <StatusBar backgroundColor={"#ae2012"} barStyle={"light"} />
      <Animated.View entering={FadeInDown} exiting={FadeOut} >
        <Text className="text-white text-6xl font-allura">Avigo</Text>
      </Animated.View>
    </View>
  );
}
