import tw from "twrnc";
import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  Switch,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { globalStyles } from "../../../globalStyles";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import CohostModal from "./CohostModal";

export default function Settings({ open, setOpen }) {
  const [addCohost, setCohost] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={globalStyles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={open}>
        <View style={globalStyles.lowerView}>
          <Animatable.View
            animation="fadeInUpBig"
            duration={1200}
            style={[
              globalStyles.shareModalView,
              tw`rounded-t-2xl`,
              { height: "90%" },
            ]}
          >
            <View
              style={tw`flex flex-row justify-between items-center p-7 px-10 mr-2 border-b border-[#EDEDED]`}
            >
              <TouchableOpacity
                style={[
                  tw` rounded-full p-[0.4rem] h-7 bg-[#D9D9D9] mt-2`,
                  globalStyles.buttonContainer,
                ]}
                onPress={() => setOpen(!open)}
              >
                <Ionicons name="close-outline" size={15} color="#767676" />
              </TouchableOpacity>

              <View style={tw`m-2 my-6 justify-center`}>
                <Text style={[globalStyles.poppinsFontBold, tw`text-[18px]`]}>
                  Settings
                </Text>

                <TouchableOpacity
                  style={tw`flex flex-row justify-between items-center p-1 pb-5 my-5 border-b border-[#CCCCCC] w-66`}
                >
                  <Text style={[tw`text-[#1180B9]`, globalStyles.poppinsFont]}>
                    Scan Tickets
                  </Text>
                  <MaterialCommunityIcons
                    name="magnify-scan"
                    size={18}
                    color="#1180B9"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={tw`flex flex-row justify-between p-1 pb-5  mb-6 border-b border-[#CCCCCC]`}
                  onPress={() => setCohost(!addCohost)}
                >
                  <Text style={[tw`text-[#1180B9]`, globalStyles.poppinsFont]}>
                    Add a Co-host
                  </Text>
                  <AntDesign name="plus" size={18} color="#1180B9" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={tw`flex flex-row justify-between p-1 pb-5  mb-6 border-b border-[#CCCCCC]`}
                  onPress={() => setDropdown(!dropdown)}
                >
                  <Text style={[tw`text-[#1180B9]`, globalStyles.poppinsFont]}>
                    Number of tickets sold
                  </Text>
                  {dropdown ? (
                    <Entypo
                      name="chevron-small-down"
                      size={18}
                      color="#1180B9"
                    />
                  ) : (
                    <Entypo name="chevron-small-up" size={18} color="#1180B9" />
                  )}
                </TouchableOpacity>

                <View
                  style={tw`${
                    dropdown ? "visible" : "hidden"
                  } mx-2 mb-4 justify-center`}
                >
                  <View style={tw`flex-row justify-between items-center`}>
                    <Text
                      style={[
                        tw`text-[10px] text-[#868686]`,
                        globalStyles.poppinsFont,
                      ]}
                    >
                      Vip
                    </Text>
                    <Text
                      style={[
                        tw`text-[9px] text-[#868686]`,
                        globalStyles.poppinsFont,
                      ]}
                    >
                      3
                    </Text>
                  </View>

                  <View style={tw`flex-row justify-between items-center`}>
                    <Text
                      style={[
                        tw`text-[10px] text-[#868686]`,
                        globalStyles.poppinsFont,
                      ]}
                    >
                      Regular
                    </Text>
                    <Text
                      style={[
                        tw`text-[9px] text-[#868686]`,
                        globalStyles.poppinsFont,
                      ]}
                    >
                      29
                    </Text>
                  </View>
                </View>

                <View style={tw`flex flex-row justify-between p-1 pb-5`}>
                  <Text
                    style={[tw`text-[#1180B9] mt-3`, globalStyles.poppinsFont]}
                  >
                    Public Chat
                  </Text>
                  <Switch
                    trackColor={{ false: "#D9D9D9", true: "#1180B9" }}
                    thumbColor={isEnabled ? "#FAFBFB" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            </View>
          </Animatable.View>
        </View>
      </Modal>

      <CohostModal open={addCohost} setOpen={setCohost} />
    </View>
  );
}
