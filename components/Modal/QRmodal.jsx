import React from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import QR from "../../assets/images/QR.png";
import outLogo from "../../assets/images/out-logo-2.png";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function EventQRModal({ open, setOpen, eventName }) {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  return (
    <Modal
      animationType="slide"
      visible={open}
      style={tw`flex justify-center items-center `}
    >
      <View style={tw`h-${windowHeight}`}>
        <Image
        source={outLogo}
        style={[
          tw`  mt-${windowHeight * 0.04} w-${windowWidth * 0.25} h-${windowHeight * 0.18} ml-${windowWidth * 0.02} absolute`,
        ]}
      />
        <View style={tw`justify-center items-center mt-28`}>
          <Image source={QR} />
          <Text style={tw`font-semibold`}>{eventName}</Text>
          <Text style={tw`text-xs`}>Participant's</Text>
          <TouchableOpacity
            style={tw`w-12 h-12 bg-stone-400 mt-36 rounded-full p-3 justify-center items-center`}
            onPress={() => setOpen(false)}
          >
            <Ionicons name="close-outline" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
