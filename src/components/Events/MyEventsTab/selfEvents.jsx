import React from "react";
import tw from "twrnc";
import { View, Text, Image, TouchableOpacity } from "react-native";
import user4 from "../../../../assets/images/user-4.png";
import { myEvents } from "../../../dummyData/data";
import { ScrollView } from "react-native-gesture-handler";

export default function SelfEvents() {
  return (
    <ScrollView style={tw`bg-white h-full p-3`}>
      {myEvents.map((item) => (
        <TouchableOpacity
          key={item._id}
          style={tw`flex flex-row p-2 border border-stone-200 rounded m-2`}
        >
          <Image source={user4} style={tw`rounded`} />
          <View style={tw`m-3`}>
            <Text style={tw`text-[#1180B9] text-lg font-semibold`}>
              {item.title}
            </Text>
            <Text style={tw`italic text-xs text-stone-400`}>{item.ticket}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
