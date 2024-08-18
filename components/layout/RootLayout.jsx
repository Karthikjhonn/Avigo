import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Register from "@/app/register";
import LoginPage from "../../app/login/index";
import Page from "../../app/index";
import TabNavigation from "../../app/(tabs)/_layout";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { userAuth } from "@/context/AuthContext";
import NotFound from "@/app/+not-found";
export default function Layout() {
  const { user } = userAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="index" component={Page} />
      <Stack.Screen name="login/index" component={LoginPage} />
      <Stack.Screen name="register/index" component={Register} />
      <Stack.Screen name="(tabs)" component={TabNavigation} />
      <Stack.Screen name="not-found" component={NotFound} />
    </Stack.Navigator>
  );
}
