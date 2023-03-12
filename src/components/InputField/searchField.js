import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

export default CustomTextInput = ({ icon, placeholder, width }) => (
  <View
    style={[
      tw`flex flex-row items-center rounded-full w-${width} h-10 pl-4`,
      { backgroundColor: "#F6F5F5" },
    ]}
  >
    <Ionicons name={icon} size={24} color="#CBCBCB" />
    <TextInput style={tw`pl-5`} placeholder={placeholder} />
  </View>
);
