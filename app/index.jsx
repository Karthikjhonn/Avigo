import React, { useEffect } from "react";
import { View, Text, Pressable, Button } from "react-native";
import { useRouter } from "expo-router";
import { userAuth } from "../context/AuthContext";

export default function SplashScreen() {
  const { user, setUser } = userAuth();
  const router = useRouter();
  console.log("splash screen");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        router.replace("/home");
      } else {
        router.replace("/login");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [user, router, setUser]);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
}
