import { useLayoutEffect, useState } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, Stack } from "expo-router";

import ChatFooter from "../components/Chats/footer";
import LeftHeader from "../components/Navigation/leftHeader";
import RightHeader from "../components/Navigation/rightHeader";
import { globalStyles } from "../styles/globalStyles";

export default function Choices() {
  const windowHeight = Dimensions.get("window").height;
  const [question, setQuestion] = useState("");
  const [fields, setFields] = useState([]);
  const [error, setError] = useState("");

  const navigation = useNavigation();
  useLayoutEffect(() => {
    LeftHeader({ navigation }), RightHeader({ navigation });
  }, []);

  if (fields.length) console.log("dd: ", fields.length);

  if (question) console.log("q: ");

  const addAnswerField = () => {
    if (question) {
      setError("");
      setFields([
        ...fields,
        {
          id: fields.length + 1,
        },
      ]);
    } else {
      setError("Enter a question first");
    }
  };
  return (
    <ScrollView style={tw`h-${windowHeight * 0.4}`}>
      <View style={tw`bg-[#F1F3F5]`}>
        <Stack.Screen
          options={{
            title: "Choices",
            headerStyle: {
              backgroundColor: "white",
              height: 130,
            },
            headerTitleStyle: globalStyles.screenHeaderStyles,
          }}
        />

        <View style={tw`bg-white flex justify-center p-3 py-7 m-4 rounded-2xl`}>
          <TextInput
            style={tw`w-72 rounded-full p-2 border border-slate-200 focus:border-teal-600 m-2`}
            placeholder="Enter Question"
            onChangeText={(text) => setQuestion(text)}
          />
          <Text style={tw`text-[10px] text-red-500 ml-4`}>{error}</Text>
          {fields.map((item) => (
            <TextInput
              key={item.id}
              style={tw`w-72 rounded-full p-2  border border-slate-200 focus:border-teal-600 m-2`}
              placeholder={`Enter Answer ${item.id}`}
            />
          ))}

          <View style={tw`flex flex-row justify-between items-center p-2`}>
            <TouchableOpacity
              style={tw`bg-[#013B4F] w-12 h-12 rounded-full items-center justify-center`}
              onPress={() => addAnswerField()}
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
    </ScrollView>
  );
}
