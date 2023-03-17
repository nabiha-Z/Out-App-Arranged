import tw from "twrnc";
import { View, Text, Image } from "react-native";
import { globalStyles } from "../../../globalStyles";

export default function EventTicket({ tickets, item, marginRight}) {
  const { _id, name, priority, slots, price } = item;

  return (
    <View
      key={_id}
      style={tw`flex flex-row justify-center items-center my-2 mt-6 w-60, mr-${marginRight}`}
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
          <Text style={tw`text-stone-300 text-xs`}>remaning slot: {slots}</Text>
        </View>
        <View style={[tw`h-5 mt-3 `, globalStyles.rotate]}>
          <Text style={tw`text-white`}>.....................</Text>
        </View>
      </View>
    </View>
  );
}
