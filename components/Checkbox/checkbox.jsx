import tw from "twrnc";
import { View, Text, Image } from "react-native";
import userIocn from "../../assets/images/user-icon.png";
import { useEffect, useState } from "react";
import { globalStyles } from "../../styles/globalStyles";
import CheckBox from "react-native-check-box";

export default function FriendCheckbox({ item, select }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(select);
  }, [select]);

  return (
    <>
      <View style={tw`flex flex-row items-center p-2`}>
  
        <CheckBox
          onClick={() => setChecked(!checked)}
          isChecked={checked}
          uncheckedCheckBoxColor="#CBCBCB"
          checkedCheckBoxColor="#1180B9"
        />
        <Image source={userIocn} style={tw`mx-2 w-6 h-6`} />
        <Text style={globalStyles.poppinsFont}>{item}</Text>
      </View>
      <View style={tw`w-70 h-0 border border-[#EDEDED]`}></View>
    </>
  );
}
