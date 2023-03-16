import tw from "twrnc";
import { View, Text, Image } from "react-native";
// import { CheckBox } from "react-native-elements";
import { Checkbox } from 'react-native-paper';
import userIocn from "../../../assets/images/user-icon.png";
import { useState } from "react";

export default function FriendCheckbox({ item }) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <View style={tw`flex flex-row items-center p-2`}>
        <Checkbox
         status={checked ? 'checked' : 'unchecked'}
          disabled={false}
          onAnimationType="fill"
          offAnimationType="fade"
          color="#1180B9"
          onPress={() => setChecked(!checked)}
        />
        <Image source={userIocn} style={tw`mx-2 w-6 h-6`} />
        <Text>{item}</Text>
      </View>
      <View style={tw`w-70 h-0 border border-[#EDEDED]`}></View>
    </>
  );
}
