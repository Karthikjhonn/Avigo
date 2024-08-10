import { View, Text, Button } from "react-native";
import React from "react";
import { userAuth } from "../../context/AuthContext";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginPage() {
  const { setUser, user } = userAuth();
  console.log(user);

  const router = useRouter();

  const handleLogin = async () => {
    setUser(true);
    router.replace("/home");
    try {
      await AsyncStorage.setItem("user", "true");
      await AsyncStorage.setItem(
        "details",
        JSON.stringify({ name: "karthik", email: "john@mail.com" })
      );
    } catch (error) {
      console.error("Failed to save user data:", error);
    }
  };

  return (
    <View>
      <Text>Login page</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
