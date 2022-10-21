import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

export default function DetailsScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-[#3e4a61]">
      <Text className="text-[#d9dad7] font-bold text-5xl">Details </Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
