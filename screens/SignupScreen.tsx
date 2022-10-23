import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Divider from "../components/Divider";
import Input from "../components/Input";
import Socials from "../components/Socials";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  function signup() {
    console.log("signup");
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        source={require("../icons/psyduck.png")}
        className="w-28 h-28 mb-10"
      />
      <Text className="text-2xl pb-4">Gotta catch ém all!</Text>
      <Input
        placeholder="Email Address"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        onPress={signup}
        className="flex-1 justify-center items-center bg-blue-400 w-5/6 max-h-12 rounded-lg"
      >
        <Text className="text-white text-lg font-bold">Create Account</Text>
      </TouchableOpacity>

      <Divider text="or" />

      <View className="flex-1 flex-row w-5/6 justify-between max-h-20">
        <Socials color="gray-200" icon="google">
          <Image source={require(`../icons/google.png`)} className="w-6 h-6" />
        </Socials>
        <Socials color="blue-700" icon="google">
          <Image
            source={require(`../icons/facebook.png`)}
            className="w-6 h-6"
          />
        </Socials>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-[#5187c8]">Have an account? Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
