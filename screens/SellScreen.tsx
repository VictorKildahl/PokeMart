import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";

export default function SellScreen() {
  const [price, setPrice] = useState<string>("99 kr");
  const [title, setTitle] = useState<string>("Base set Charizard");

  return (
    <View className="flex-1 justify-center items-start bg-white px-12">
      <Text>Add a Photo and a Title</Text>
      <View className="justify-between flex-row pt-2">
        <View className="w-12 h-12 rounded-xl bg-[#e3e3e3] justify-center items-center ">
          <TouchableOpacity onPress={() => console.log("take picture of card")}>
            <Image source={require("../icons/more.png")} className="h-8 w-8" />
          </TouchableOpacity>
        </View>
        <Input placeholder="Title" onChangeText={(text) => setTitle(text)} />
      </View>

      <Text>Choose a card</Text>

      <Text>Select condition of card</Text>

      <Text className="pt-4 pb-2">Selling price</Text>
      <Input placeholder="Price" onChangeText={(text) => setPrice(text)} />
    </View>
  );
}
