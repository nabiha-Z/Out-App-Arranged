import tw from "twrnc";
import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

export default function Footer({ screen }) {
  const windowWidth = Dimensions.get("window").width;
  const [file, setFile] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 5],
      quality: 0.5,
      allowedFileTypes: ["jpg", "png"],
    });

    const { assets } = result;
    if (!result.canceled) {
      let fileInfo = await FileSystem.getInfoAsync(assets[0].uri);
      let fileSize = fileInfo.size / 1024 / 1024;

      if (fileSize <= 5) {
        const { assets } = result;
        setFile(assets[0].uri);
      } else {
        alert(
          "Please select an image that is less than or equal to 5MB in size."
        );
      }
    } else {
      setFile(null);
    }
  };

  return (
    <View style={tw` ${screen == "chat" ? "bg-white" : "bg-transparent"}`}>
      <View
        style={[
          tw` flex-row  justify-between items-center pt-4 px-5 pb-7 ${
            screen !== "chat" ? `mt-6` : "mt-0"
          }`,
        ]}
      >
        <TouchableOpacity onPress={() => pickImage()}>
          <Ionicons
            name="md-attach-sharp"
            size={35}
            color="#646464"
            style={tw`mt-4`}
          />
        </TouchableOpacity>

        <TextInput
          style={tw` w-${windowWidth * 0.13} h-12 p-2 px-4 mt-4 ${
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
          style={[
            tw`mt-3 p-3 rounded-full bg-white h-12 `,
            globalStyles.shadow,
          ]}
        >
          <Ionicons name="md-send" size={24} color="#1180B9" />
        </TouchableOpacity>
      </View>

      {file && (
        <TouchableOpacity onPress={() => setFile(null)}>
          <Text style={tw`text-[10px] text-[#3FB544] mb-2 mx-6`}>
            1 file attached {"\n"} (Tap to remove)
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
