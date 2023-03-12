import tw from "tailwind-react-native-classnames";
import { View, Text, TouchableOpacity, Image } from "react-native";
import seenVector from "../../../assets/images/message-seen-vector.png";
import { useNavigation } from "@react-navigation/native";

export default function ChatList({ image, username, last_message, time }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`flex flex-row border-b border-gray-200 pb-4 mb-2`}
      onPress={() => navigation.navigate("ChatScreen")}
    >
      <Image source={image} alt="user" style={tw`rounded-full`} />
      <View style={tw`w-48 flex-col`}>
        <Text style={[tw` mx-3 text-black`]}>{username}</Text>
        <View style={tw`flex-row justify-center mx-3`}>
          <Image source={seenVector} style={tw`mt-1`} />
          <Text style={tw`text-xs font-light text-gray-500 ml-2`}>
            {last_message}
          </Text>
        </View>
      </View>

      <View style={tw`flex items-end justify-center w-20`}>
        <Text style={tw`text-xs font-light`}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
}
