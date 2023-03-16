import tw from "twrnc";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { Entypo } from "@expo/vector-icons";
import { changeIncrement } from "../../helpers/tickets";

export default function Tickets({ tickets, item }) {
  const { _id, name, priority, slots, price } = item;
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
      <View
        key={_id}
        style={tw`flex flex-row justify-center items-center my-2 mt-6 w-60`}
      >
        <Image
          source={tickets[Math.floor(Math.random() * 3) + 0]}
          style={tw`w-full h-30 absolute z-30`}
        />
        <View
          style={[
            tw`bg-white border border-slate-200 h-16 w-20 justify-center items-center ml-[13rem] z-20  mt-[-8px] rounded`,
          ]}
        >
          <Text style={tw`font-bold ml-3`}>{price}</Text>
        </View>

        <View style={tw`flex flex-row absolute z-40 `}>
          <View style={tw`w-24 ml-10`}>
            <Text style={tw`text-stone-300 text-xs`}>{priority}</Text>
            <Text style={tw`text-white font-bold `}>{name}</Text>
            <Text style={tw`text-stone-300 text-xs`}>
              remaning slot: {slots}
            </Text>
          </View>
          <View style={[tw`h-5 mt-3 `, globalStyles.rotate]}>
            <Text style={tw`text-white`}>.....................</Text>
          </View>
        </View>
      </View>

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
