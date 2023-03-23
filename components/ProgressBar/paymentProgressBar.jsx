import { View, Text } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "./progressbar";

export default function PaymentProgressBar() {
  return (
    <>
      <View style={tw`flex flex-row m-5 mx-2 mb-1`}>
        <View
          style={tw`w-4 h-4 rounded-full bg-[#1180B9] z-10 mt-[-5px] justify-center items-center `}
        >
          <Ionicons name="checkmark" size={10} color="white" />
        </View>
        <View style={tw`w-24 h-1.4 rounded-full bg-[#1180B9] ml-[-9px]`}></View>
        <View
          style={tw`w-4 h-4 rounded-full bg-[#1180B9] z-10 mt-[-5px] ml-[-9px] justify-center items-center `}
        >
          <Ionicons name="checkmark" size={10} color="white" />
        </View>

        <View style={tw`w-24 h-1.4 rounded-full bg-[#1180B9] ml-[-9px]`}></View>
        <View
          style={tw`w-4 h-4 rounded-full bg-[#1180B9] z-10 mt-[-5px] ml-[-9px] justify-center items-center `}
        >
          <Ionicons name="checkmark" size={10} color="white" />
        </View>

        <ProgressBar />
        <View
          style={tw`w-4 h-4 rounded-full bg-[#1180B9] z-10 mt-[-5px] ml-[-9px] justify-center items-center `}
        >
          <Ionicons name="checkmark" size={10} color="white" />
        </View>
      </View>

      <View style={tw`flex flex-row mx-2 justify-between items-center`}>
        <Text style={tw`text-[10px] text-[#989898] font-light`}>Step 1</Text>
        <Text style={tw`text-[10px] text-[#989898] font-light`}>Step 2</Text>
        <Text style={tw`text-[10px] text-[#989898] font-light`}>Step 3</Text>
        <Text style={tw`text-[10px] text-[#989898] font-light mr-[-5px]`}>
          Complete
        </Text>
      </View>
    </>
  );
}
