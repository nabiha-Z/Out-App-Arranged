import { View, Text, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import tw from "twrnc";
import { globalStyles } from "../../styles/globalStyles";

export default function Slider({ title, width, heigth }) {
  return (
    <View
      style={[tw`bg-white rounded-lg w-${width} h-${heigth} m-2 mb-5`, globalStyles.shadow]}
      key={Math.floor(Math.random() * 3000) + 0}
    >
      <View style={tw`rounded-t-lg p-1 bg-[#013B4F]`}>
        <Text style={tw`text-white text-lg text-center`}>{title}</Text>
      </View>

      <TouchableOpacity
        style={[
          tw`flex-row justify-center items-center rounded-lg m-4 mx-3 bg-white h-6`,
          globalStyles.shadow,
        ]}
      >
        <Text style={tw`mr-2 mt-1 text-xs`}>6</Text>
        <View style={tw`flex-col`}>
          <Text style={tw`mr-2 text-xs mt-[-3px]`}>11:00PM</Text>

          <ProgressBar
            progress={0.6}
            color="#1180B9"
            style={tw`mt-1 w-32 rounded-full`}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          tw`flex-row justify-center rounded-lg m-1 mx-4 bg-white h-6`,
          globalStyles.shadow,
        ]}
      >
        <Text style={tw`mr-2 mt-1 text-xs`}>3</Text>
        <View style={tw`flex-col`}>
          <Text style={tw`mr-2 text-xs mt-[-3px]`}>04:30PM</Text>

          <ProgressBar
            progress={0.3}
            color="#1180B9"
            style={tw`mt-1 w-32 rounded-full`}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
