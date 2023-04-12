import { useState } from "react";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import { globalStyles } from "../../styles/globalStyles";

export default function Boolean() {
  const [questions, setQuestions] = useState([]);

  // const questions = [
  //   "Are you going to the event? ",
  //   "Have you booked the ticket?",
  // ];
  return (
    <View style={tw`flex justify-center items-center pb-20`}>
      {questions.map((item) => (
        <View
          key={item.id}
          style={[
            tw`bg-white rounded-lg w-82 h-48 m-2 mb-3`,
            globalStyles.shadow,
          ]}
        >
          <View style={tw`rounded-t-lg p-3 bg-[#013B4F]`}>
            <Text style={tw`text-white font-bold text-[17px] text-center`}>
              Are you going to the event?
            </Text>
          </View>

          <TouchableOpacity
            style={[
              tw`flex-row justify-center self-center items-center rounded-full m-4 mx-3 bg-[#013B4F] h-10 w-50`,
              globalStyles.shadow,
            ]}
          >
            <Text style={tw`mr-2 mt-1 text-white`}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              tw`flex-row justify-center self-center items-center rounded-full m-1 mx-4 bg-white h-10 w-50`,
              globalStyles.shadow,
            ]}
          >
            <Text style={tw`mr-2 mt-1 `}>No</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity
        onPress={() =>
          setQuestions([
            ...questions,
            {
              id: questions.length + 1,
              editable: true,
            },
          ])
        }
        style={tw`bg-[#1180B9] w-12 h-12 rounded-full justify-center self-end items-center m-6`}
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
