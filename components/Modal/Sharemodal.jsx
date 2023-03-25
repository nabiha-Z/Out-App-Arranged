import tw from "twrnc";
import { useState } from "react";
import * as Animatable from "react-native-animatable";
import { View, Modal, TouchableOpacity, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";
import CustomTextInput from "../InputField/searchField";
import FriendCheckbox from "../Checkbox/checkbox";
import CheckBox from "react-native-check-box";

export default function Sharemodal({ open, setOpen }) {
  const [checked, setChecked] = useState(false);

  const friends = ["Peter", "John", "John", "Peter", "John"];
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={globalStyles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={open}>
        <View style={globalStyles.lowerView}>
          <Animatable.View
            animation="fadeInUpBig"
            duration={1200}
            style={[tw`rounded-t-2xl`, globalStyles.shareModalView]}
          >
            <View
              style={tw`flex flex-row justify-between items-center p-6 px-10 border-b border-[#EDEDED]`}
            >
              <TouchableOpacity style={tw`flex flex-row`}>
                <Text
                  style={[tw`text-[#5B5B5B] mr-1`, globalStyles.poppinsFont]}
                >
                  Copy Link
                </Text>
                <EvilIcons name="paperclip" size={24} color="#1180B9" />
              </TouchableOpacity>

              <TouchableOpacity style={tw`flex flex-row`}>
                <Text
                  style={[tw`text-[#5B5B5B] mr-2`, globalStyles.poppinsFont]}
                >
                  Save
                </Text>
                <AntDesign name="download" size={16} color="#1180B9" />
              </TouchableOpacity>
            </View>

            <View
              style={tw`flex flex-row my-4 justify-between items-center p-6 py-0`}
            >
              <CustomTextInput
                icon="search-sharp"
                placeholder="Search"
                width="44"
              />

              <Text style={[tw`ml-4 font-semibold`, globalStyles.poppinsFont]}>
                Select All
              </Text>

              <CheckBox
                onClick={() => setChecked(!checked)}
                isChecked={checked}
                disabled={false}
                uncheckedCheckBoxColor="#CBCBCB"
                checkedCheckBoxColor="#1180B9"
              />
            </View>
            <ScrollView style={tw`h-${windowHeight * 0.2} px-5 `}>
              <View>
                {friends.map((item) => (
                  <FriendCheckbox item={item} select={checked} key={item} />
                ))}
              </View>

              <TouchableOpacity
                style={tw`w-12 h-12 bg-gray-300 m-5 rounded-full p-3 justify-center self-center items-center`}
                onPress={() => setOpen(false)}
              >
                <Ionicons name="close-outline" size={26} color="white" />
              </TouchableOpacity>
            </ScrollView>
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
}
