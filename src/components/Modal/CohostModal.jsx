import { View, Modal, TouchableOpacity, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { globalStyles } from "../../../globalStyles";

export default function CohostModal({ open, setOpen }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setOpen(!open);
      }}
    >
      <View style={globalStyles.centeredView}>
        <View style={[globalStyles.modalView, { width: "70%", height: "30%" }]}>
          <TouchableOpacity
            style={[
              tw` rounded-full p-[0.4rem] h-7 bg-[#D9D9D9]`,
              globalStyles.buttonContainer,
            ]}
            onPress={() => setOpen(!open)}
          >
            <Ionicons name="close-outline" size={16} color="#767676" />
          </TouchableOpacity>
          <View style={tw`p-3 pt-8 justify-center items-center`}>
            <TextInput
              style={tw`w-35 h-9 p-2 rounded-full border border-[#A7A7A7]`}
              placeholder="Enter co-host name"
            />

            <TouchableOpacity
              style={tw`w-35 h-9 justify-center p-2 mt-3 rounded-full bg-[#2081B2]`}
            >
              <Text
                style={[
                  tw`text-white text-xs text-center`,
                  globalStyles.poppinsFont,
                ]}
              >
                Add Co-host
              </Text>
            </TouchableOpacity>
            <Text style={tw`text-[#9F9F9F] m-2`}>or</Text>
            <TouchableOpacity>
              <Text style={tw`text-[#2081B2] underline`}>Copy the Link</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
