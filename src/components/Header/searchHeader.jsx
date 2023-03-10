import React from "react";
import { TextInput, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Feather } from "@expo/vector-icons";
import CustomTextInput from "../../components/InputField/searchField";

export default function SearchHeader() {
  return (
    <View style={tw`h-32 flex flex-row justify-between bg-white p-8 pt-16`}>
      <CustomTextInput icon="search-sharp" placeholder="Search" />
      <Feather name="menu" size={25} color="#013B4F" style={tw`mt-2`} />
    </View>
  );
}
