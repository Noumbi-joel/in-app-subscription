import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// rn navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "../screens/HomeScreen";
import DemoScreen from "../screens/DemoScreen";
import PaywallScreen from "../components/Paywall";

export type RootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  Demo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Demo" component={DemoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
