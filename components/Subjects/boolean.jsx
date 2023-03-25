import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { globalStyles } from "../../styles/globalStyles";

export default function Boolean() {
  const questions = [
    "Are you going to the event? ",
    "Have you booked the ticket?",
  ];
  return (
    <View style={tw`flex justify-center items-center pb-20`}>
      {questions.map((item, index) => (
        <View
          key={index}
          style={[
            tw`bg-white rounded-lg w-66 h-46 m-2 mb-3`,
            globalStyles.shadow,
          ]}
        >
          <View style={tw`rounded-t-lg p-3 bg-[#013B4F]`}>
            <Text style={tw`text-white font-bold text-[17px] text-center`}>
              {item}
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
    </View>
  );
}
