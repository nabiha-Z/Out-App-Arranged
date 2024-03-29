import tw from "twrnc";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

import seenVector from "../../assets/images/message-seen-vector.png";
import { globalStyles } from "../../styles/globalStyles";

export default function ChatList({ image, username, last_message, time }) {
  const router = useRouter();
  const windowWidth = Dimensions.get("window").width;

  return (
    <TouchableOpacity
      style={tw`flex flex-row border-b border-gray-200 pb-4 pt-2 mb-2`}
      onPress={() => router.push("/chat")}
    >
      <Image source={image} alt="user" style={tw`rounded-full`} />
      <View style={tw`w-48 flex-col`}>
        <Text style={[tw` mx-3 text-black`, globalStyles.poppinsFont]}>
          {username}
        </Text>
        <View style={tw`flex-row justify-center mx-3`}>
          <Image source={seenVector} style={tw`mt-1`} />
          <Text
            style={[
              tw`text-[10px] font-light text-gray-500 ml-2`,
              globalStyles.poppinsFont,
            ]}
          >
            {last_message}
          </Text>
        </View>
      </View>

      <View style={tw`flex items-end justify-center w-${windowWidth* 0.08}`}>
        <Text style={tw`text-xs font-light`}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
}
