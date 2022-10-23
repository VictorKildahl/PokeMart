import { View, Image } from "react-native";
import React from "react";

type SocialsProps = {
  color?: string;
  icon: string;
  children: React.ReactNode;
};

export default function Socials({ color, icon, children }: SocialsProps) {
  return (
    <View
      className={`w-36 h-12 rounded-xl bg-${color} justify-center items-center`}
    >
      {children}
    </View>
  );
}
