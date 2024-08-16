import { View, Text } from 'react-native'
import React from 'react'
import { SolidButton } from '@/components/button/Button';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userAuth } from '@/context/AuthContext';
export default function ProfilePage() {
  const { setUser } = userAuth();
  const signOut = async () => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(false));
      setUser(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>ProfilePage</Text>
      <SolidButton onPress={signOut} title="Sign Out" />
    </View>
  )
}