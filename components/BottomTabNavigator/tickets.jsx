import { View, Text, ScrollView, Dimensions, Animated } from "react-native";
import tw from "twrnc";
import { globalStyles } from "../../styles/globalStyles";
import { events } from "../../dummyData/data";
import SwipeableTicket from "../SwipeableTicket/swipeable";

export default function MyTickets() {
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={tw`items-center justify-center bg-white pt-2`}>
      <Text
        style={[
          tw`text-zinc-400 text-xs text-center mb-3`,
          globalStyles.poppinsFont,
        ]}
      >
        To scan your ticket, slide left and click the QR
      </Text>

      <ScrollView style={[{ height: windowHeight * 0.9 }]}>
        <View style={tw`pb-32 mt-4`}>
          {events.map((item) => (
            <SwipeableTicket item={item} key={item._id} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
