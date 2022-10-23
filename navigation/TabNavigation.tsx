import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image } from "react-native";
import HeaderRight from "../components/HeaderRight";
import AccountScreen from "../screens/AccountScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";
import SellScreen from "../screens/SellScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Sell" component={SellScreen} />
    </HomeStack.Navigator>
  );
}

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShadowVisible: false,
        tabBarStyle: { borderTopWidth: 0 },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => <HeaderRight />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          title: "- Home -",
          tabBarIcon: () => (
            <Image
              source={require("../icons/house.png")}
              style={{
                height: 25,
                width: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          title: "- Favorite -",
          tabBarIcon: () => (
            <Image
              source={require("../icons/heart.png")}
              style={{
                height: 25,
                width: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "- Account -",
          tabBarIcon: () => (
            <Image
              source={require("../icons/avatar.png")}
              style={{
                height: 25,
                width: 25,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
