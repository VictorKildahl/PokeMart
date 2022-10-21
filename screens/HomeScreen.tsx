import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View, Image } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-[#3e4a61]">
      <Text className="text-[#d9dad7] font-bold text-5xl">Pokemon </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Image
        className="h-52 w-36"
        source={{
          uri: "https://images.pokemontcg.io/base1/4.png",
        }}
      />
    </View>
  );
}
