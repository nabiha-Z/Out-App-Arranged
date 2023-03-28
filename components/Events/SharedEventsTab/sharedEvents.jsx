import React from "react";
import tw from "twrnc";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import user2 from "../../../assets/images/user-2.png";
import user7 from "../../../assets/images/user-7.png";
import { myEvents } from "../../../dummyData/data";
import { globalStyles } from "../../../styles/globalStyles";

export default function SharedEvents() {
  return (
    <ScrollView style={tw`flex bg-white h-full p-3`}>
      <View style={tw`justify-end self-end mr-6`}>
        <Text>Filter: All</Text>
      </View>
      {myEvents.map((item) => (
        <TouchableOpacity
          key={item._id}
          style={tw`flex flex-row p-2 border border-stone-200 rounded m-2`}
        >
          <Image source={user7} style={tw`rounded`} />
          <View style={tw`m-3 w-50`}>
            <Text
              style={[
                tw`text-[#1180B9] text-[16px] font-semibold text-[14px]`,
                globalStyles.poppinsFont,
              ]}
            >
              {item.title}
            </Text>
            <Text style={tw`italic text-xs text-stone-400`}>{item.ticket}</Text>
          </View>
          <View style={tw`flex justify-end self-end z-30 ml-[-1.3rem]`}>
            <Image source={user2} style={tw`w-6 h-6 rounded-full`} />
            <Text
              style={[tw`text-[#1180B9] text-xs `, globalStyles.poppinsFont]}
            >
              Anna
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
