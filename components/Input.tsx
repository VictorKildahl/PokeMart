import React from "react";
import { TextInput, View } from "react-native";

type InputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export default function Input({
  placeholder,
  onChangeText,
  secureTextEntry,
}: InputProps) {
  return (
    <View className="w-5/6 self-center bg-[#e3e3e3] rounded-lg mx-2 mb-4">
      <TextInput
        className="p-4"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry || false}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
}
