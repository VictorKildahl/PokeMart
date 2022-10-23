import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  // const login = async () => {
  //     if (email && password) {
  //       await firebase
  //         .auth()
  //         .signInWithEmailAndPassword(email, password)
  //         .then(() => {
  //           props.navigation.navigate("Root");
  //         })
  //         .catch((error) => {
  //           alert(error);
  //         });
  //     } else {
  //       Alert.alert(`Missing Fields`);
  //     }
  //   };

  function login() {
    console.log("Login");
    navigation.navigate("Tab");
  }

  return (
    // <ScrollView
    //   contentContainerStyle={{
    //     flexGrow: 1,
    //   }}
    //   keyboardShouldPersistTaps="handled"
    //   keyboardDismissMode="on-drag"
    // >
    // <KeyboardAvoidingView >
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
        onPress={login}
        className="flex-1 justify-center items-center bg-blue-400 w-5/6 max-h-12 rounded-lg"
      >
        <Text className="text-white text-lg font-bold">Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        className="pt-6"
      >
        <Text className="text-[#5187c8]">Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
    // </KeyboardAvoidingView>
  );
}
