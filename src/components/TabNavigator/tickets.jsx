import { View, Text, ScrollView, Dimensions, Animated } from "react-native";
import tw from "twrnc";
import { events } from "../../dummyData/data";
import SwipeableTicket from "../SwipeableTicket/swipeable";

export default function MyTickets() {
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={tw`items-center justify-center bg-white pt-2`}>
      <ScrollView style={[{ height: windowHeight * 0.9 }]}>
        <Text style={tw`text-zinc-400 font-medium text-center`}>
          To scan your ticket, slide left
        </Text>

        <View style={tw`p-4 px-0 pb-32`}>
          {events.map((item) => (
            <SwipeableTicket item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
