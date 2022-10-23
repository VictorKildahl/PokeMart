import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function HeaderRight() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Sell")}>
      <Image
        source={require("../icons/pokeball.png")}
        className="h-8 w-8 mr-6"
      />
    </TouchableOpacity>
  );
}
