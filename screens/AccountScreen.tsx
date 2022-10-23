import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function AccountScreen() {
  const navigation = useNavigation();

  function logout() {
    console.log("logout");
    navigation.navigate("Login");
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <TouchableOpacity
        onPress={logout}
        className="flex-1 justify-center items-center bg-red-600 w-5/6 max-h-12 rounded-lg"
      >
        <Text className="text-white text-lg font-bold">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
