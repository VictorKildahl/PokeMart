import { View, Text } from "react-native";
import React from "react";

type DividerProps = {
  text: string;
};

export default function Divider({ text }: DividerProps) {
  return (
    <View className="flex-1 flex-row items-center w-5/6 max-h-6 justify-center opacity-50 my-4">
      <View className="w-2/5 border-b-[1px] bg-gray-200" />
      <Text className="px-4">{text}</Text>
      <View className="w-2/5 border-b-[1px] bg-gray-200" />
    </View>
  );
}
