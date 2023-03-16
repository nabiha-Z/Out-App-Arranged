import { useLayoutEffect } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import ChatFooter from "../../components/Chats/footer";

export default function Choices({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.pop()}>
          <View style={tw`mx-5`}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </View>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => alert("menu")}>
          <View style={{ marginRight: 15 }}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={tw`bg-[#F1F3F5]`}>
      <View style={tw`bg-white flex justify-center p-3 py-7 m-4 rounded-2xl`}>
        <TextInput
          style={tw`w-72 rounded-full p-2 border border-slate-200 focus:border-teal-600 m-2`}
          placeholder="Enter Question"
        />
        <TextInput
          style={tw`w-72 rounded-full p-2  border border-slate-200 focus:border-teal-600 m-2`}
          placeholder="Enter Answer 1"
        />
        <TextInput
          style={tw`w-72 rounded-full p-2 border border-slate-200 focus:border-teal-600 m-2`}
          placeholder="Enter Answer 2"
        />

        <View style={tw`flex flex-row justify-between items-center p-2`}>
          <TouchableOpacity
            style={tw`bg-[#013B4F] w-12 h-12 rounded-full items-center justify-center`}
          >
            <Entypo name="plus" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-[#1180B9] w-24 h-12 rounded-full items-center justify-center p-1`}
          >
            <Text style={tw`text-center text-white font-bold text-[1.1rem]`}>
              Ask
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ChatFooter />
    </View>
  );
}
