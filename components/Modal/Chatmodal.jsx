import { View, Modal, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { globalStyles } from "../../styles/globalStyles";
import { useRouter } from "expo-router";

export default function CustomModal({ open, setOpen }) {
  const router = useRouter();
  return (
    <View style={globalStyles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={globalStyles.centeredView}>
          <View style={globalStyles.modalView}>
            <TouchableOpacity
              style={[
                tw` rounded-full p-[0.4rem] h-8 bg-zinc-400`,
                globalStyles.buttonContainer,
              ]}
              onPress={() => setOpen(!open)}
            >
              <Ionicons name="close-outline" size={20} color="white" />
            </TouchableOpacity>
            <View style={tw`mt-5`}>
              <Text style={tw`text-lg font-bold my-5`}>
                Choose Subject Type
              </Text>
              <TouchableOpacity
                style={tw`bg-white rounded-full border p-3 border-[#013B4F] mb-4`}
                onPress={() => {
                  setOpen(!open);
                  router.push("/choices");
                }}
              >
                <Text style={tw`text-[#013B4F] font-bold text-center`}>
                  Multiple Choices
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`bg-[#013B4F] rounded-full border p-3 border-[#013B4F] mb-4`}
                onPress={() => {
                  setOpen(!open);
                  router.push("/subjects");
                }}
              >
                <Text style={tw`text-white font-bold text-center`}>
                  Yes and No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`bg-white rounded-full border p-3 border-[#013B4F] mb-4`}
              >
                <Text style={tw`text-[#013B4F] font-bold text-center`}>
                  Task Assignment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
