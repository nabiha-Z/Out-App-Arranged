import { View, Text } from "react-native";
import { ProgressBar } from "react-native-paper";
import tw from "twrnc";
import { globalStyles } from "../../../globalStyles";

export default function Slider({ title }) {
  return (
    <View style={[tw`bg-white rounded-lg w-52 h-36 m-2`, globalStyles.shadow]}>
      <View style={tw`rounded-t-lg p-2 bg-[#013B4F]`}>
        <Text style={tw`text-white text-lg text-center`}>{title}</Text>
      </View>

      <View style={tw`flex-row justify-center rounded-full m-4 mx-3`}>
        <Text style={tw`mr-2 mt-1`}>6</Text>
        <View style={tw`flex-col`}>
          <Text style={tw`mr-2 text-xs`}>11:00PM</Text>

          <ProgressBar
            progress={0.6}
            color="#1180B9"
            style={tw`mt-1 w-32 rounded-full`}
          />
        </View>
      </View>

      <View style={tw`flex-row justify-center rounded-full m-1 mx-4`}>
        <Text style={tw`mr-2 mt-1`}>3</Text>
        <View style={tw`flex-col`}>
          <Text style={tw`mr-2 text-xs`}>04:30PM</Text>

          <ProgressBar
            progress={0.3}
            color="#1180B9"
            style={tw`mt-1 w-32 rounded-full`}
          />
        </View>
      </View>
    </View>
  );
}
