import tw from "twrnc";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import qrcode from "../../../assets/images/qr-code.png";
import EventQRModal from "../Modal/QRmodal";

export default function SwipeableTicket({ item }) {
  const [open, setOpen] = useState(false);

  const { name, priority, description } = item;
  const rectangles = ["#1180B9", "#036182", "#013B4F"];

  const rightSwipe = () => {
    return (
      <TouchableOpacity
        style={tw`flex items-center justify-center p-6`}
        onPress={() => setOpen(!open)}
      >
        <Image source={qrcode} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Swipeable renderRightActions={rightSwipe}>
        <View
          style={tw`flex flex-row w-full items-center justify-center p-9 my-4 px-[2rem]`}
        >
          <View
            style={tw`w-6 h-12 bg-white ml-[0rem] z-20 rounded-r-full`}
          ></View>
          <View
            style={tw`w-78 h-28 rounded absolute bg-[${
              rectangles[Math.floor(Math.random() * 3) + 0]
            }] ml-6`}
          ></View>
          <View style={tw`absolute`}>
            <Text style={tw`text-stone-300 text-xs ml-[-5rem]`}>
              {priority}
            </Text>
            <Text style={tw`text-white font-bold text-lg  ml-[-5rem]`}>
              {name}
            </Text>
            <Text style={tw`text-stone-300 ml-[-5rem]`}>{description}</Text>
          </View>
          <View
            style={tw`w-6 h-12 bg-white ml-[17rem] z-20 rounded-l-full`}
          ></View>
        </View>
        <View
          style={tw`text-center justify-center self-center w-68 border-b border-[#D2D2D2]`}
        ></View>
      </Swipeable>

      <EventQRModal open={open} setOpen={setOpen} eventName={name} />
    </>
  );
}
