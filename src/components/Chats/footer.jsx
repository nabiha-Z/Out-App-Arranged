import tw, { create } from "twrnc";
import { View, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../../globalStyles";

export default function Footer({ screen }) {
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={[
        tw` flex-row ${
          screen == "chat" ? "bg-white" : "bg-transparent"
        } justify-between items-center p-12 pt-4 px-5 ${
          screen !== "chat" ? `mt-[${windowHeight * 0.28}]` : "mt-0"
        }`,
      ]}
    >
      <Ionicons
        name="md-attach-sharp"
        size={35}
        color="#646464"
        style={tw`mt-4`}
      />

      <TextInput
        style={tw` w-40 h-12 p-2 px-4 mt-4 ${
          screen == "chat" ? "bg-slate-100" : "bg-white"
        } text-sm text-slate-400 rounded-full`}
        placeholder="Type message..."
      />

      <TouchableOpacity
        style={[
          tw`mt-3 p-3 rounded-full h-12 bg-[#1180B9]`,
          globalStyles.shadow,
        ]}
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[tw`mt-3 p-3 rounded-full bg-white h-12 `, globalStyles.shadow]}
      >
        <Ionicons name="md-send" size={24} color="#1180B9" />
      </TouchableOpacity>
    </View>
  );
}
