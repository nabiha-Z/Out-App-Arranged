import tw from "twrnc";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { Entypo } from "@expo/vector-icons";
import { changeIncrement } from "../../helpers/tickets";
import EventTicket from "./eventTicket";

export default function Tickets({ tickets, item }) {
  const { slots } = item;
  const [counter, setCounter] = useState(1);
  const [disableButton, setDisableButton] = useState({
    increment: false,
    decrement: true,
  });

  return (
    <View
      style={[
        tw`flex flex-row justify-between items-center mb-5 bg-white rounded-xl`,
        globalStyles.highlightedShadow,
      ]}
    >
      <EventTicket item={item} tickets={tickets} marginRight="0" />

      <View style={tw`h-32 w-12 bg-[#013B4F] p-2 m-2 rounded-lg items-center`}>
        <TouchableOpacity
          style={tw`p-2 border-b border-[#46617A]`}
          onPress={() =>
            changeIncrement({
              action: 0,
              slots,
              counter,
              setCounter,
              setDisableButton,
              disableButton,
            })
          }
          disabled={disableButton.decrement}
        >
          <Entypo name="minus" size={16} color="white" />
        </TouchableOpacity>
        <View style={tw`p-2 border-b border-[#46617A]`}>
          <Text style={tw`text-white font-bold text-[14px]`}> {counter} </Text>
        </View>
        <TouchableOpacity
          style={tw`p-2 border-b border-[#46617A]`}
          onPress={() =>
            changeIncrement({
              action: 1,
              slots,
              counter,
              setCounter,
              setDisableButton,
              disableButton,
            })
          }
          disabled={disableButton.increment}
        >
          <Entypo name="plus" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
