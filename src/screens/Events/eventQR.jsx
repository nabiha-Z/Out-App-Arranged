import React from "react";
import { View, Image, Dimensions, Text, StyleSheet } from "react-native";
import tw from "twrnc";
import QR from "../../../assets/images/QR.png";
import outLogo from "../../../assets/images/out-logo-2.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function EventQR() {
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Image
        source={outLogo}
        style={[tw`mt-${windowHeight * 0.1}`, StyleSheet.absoluteFill]}
      />
      <View style={tw`justify-center items-center`}>
        <Image source={QR} />
        <Text style={tw`font-semibold`}>Name of Event</Text>
        <Text style={tw`text-xs`}>Participant's</Text>
      </View>
      <TouchableOpacity
        style={tw`h-12 bg-stone-400 mt-22 rounded-full p-3 justify-center`}
        onPress={()=>navigation.pop()}
      >
        <Ionicons name="close-outline" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
}
