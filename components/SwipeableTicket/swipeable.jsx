import tw from "twrnc";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import qrcode from "../../assets/images/qr-code.png";
import EventQRModal from "../Modal/QRmodal";
import rectangle3 from "../../assets/images/event-rectangle-3.png";
import rectangle2 from "../../assets/images/event-rectangle-2.png";
import rectangle1 from "../../assets/images/event-rectangle-1.png";
import { globalStyles } from "../../styles/globalStyles";

export default function SwipeableTicket({ item }) {
  const [open, setOpen] = useState(false);

  const { name, priority, description } = item;
  const windowWidth = Dimensions.get("window").width;
  const rectangles = [rectangle1, rectangle2, rectangle3];

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
          style={tw`flex w-[${
            windowWidth / 4.4
          }] items-center justify-center my-5 px-3`}
        >
          <Image
            source={rectangles[Math.floor(Math.random() * 3) + 0]}
            style={tw`w-full h-30`}
          />
          <View style={tw`flex flex-row absolute`}>
            <View style={tw`w-32 ml-[3rem]`}>
              <Text
                style={[
                  tw`text-stone-200 text-xs italic font-bold`,
                  globalStyles.interFont,
                ]}
              >
                {priority}
              </Text>
              <Text
                style={[tw`text-white text-lg `, globalStyles.interFontBold]}
              >
                {name}
              </Text>
              <Text
                style={[tw`text-stone-300 text-xs`, globalStyles.interFont]}
              >
                {description}
              </Text>
            </View>
            <View style={[tw`mr-[1rem] mb-1`, globalStyles.rotate]}>
              <Text style={tw`text-white`}>..........................</Text>
            </View>
          </View>
        </View>
        <View
          style={tw`text-center justify-center self-center w-68 border-b border-[#D2D2D2]`}
        ></View>
      </Swipeable>

      <EventQRModal open={open} setOpen={setOpen} eventName={name} />
    </>
  );
}
