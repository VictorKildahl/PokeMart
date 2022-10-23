import React from "react";
import { Image, Text, View } from "react-native";
import Header from "../components/HeaderRight";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-[#d9dad7] font-bold text-5xl">Pokemon</Text>

      <Image
        className="h-52 w-36"
        source={{
          uri: "https://images.pokemontcg.io/base1/4.png",
        }}
      />
    </View>
  );
}
