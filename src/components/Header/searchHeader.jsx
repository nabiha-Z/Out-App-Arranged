import React from "react";
import { TextInput, View } from "react-native";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";
import CustomTextInput from "../../components/InputField/searchField";

export default function SearchHeader({ paddingTop }) {
  return (
    <View
      style={tw`h-32 flex flex-row justify-between bg-white p-8 pt-${paddingTop}`}
    >
      <CustomTextInput icon="search-sharp" placeholder="Search" width="60" />
      <Feather name="menu" size={25} color="#013B4F" style={tw`mt-2`} />
    </View>
  );
}
