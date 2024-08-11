
import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index" />
      <Stack.Screen name="register/index" options={{presentation:"modal"}}/>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
