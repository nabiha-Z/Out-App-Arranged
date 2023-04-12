import tw from "twrnc";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

import { globalStyles } from "../../styles/globalStyles";

export default function BooleanSubjectModal({
  open,
  setOpen,
  title,
  setTitle,
  options,
  setOptions,
}) {
  const [option, setOption] = useState("");
  const [choices, setChoices] = useState([]);
  const [error, setError] = useState("");

  const [fields, setFields] = useState([]);

  const addOptionsField = () => {
    if (title) {
      setError("");
      if (option) setChoices([...choices, option]);
      setFields([
        ...fields,
        {
          id: fields.length + 1,
        },
      ]);
      setOption("");
    } else {
      setError("Enter the title first");
    }
  };

  const save = () => {
    setOptions([...options, { id: options.length, title, choices }]);
    setTitle("");
    setChoices([]);
    setFields([]);
    setOpen(!open);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={open}>
      <View style={globalStyles.centeredView}>
        <View style={[globalStyles.modalView, { width: "80%", height: "70%" }]}>
          <TouchableOpacity
            style={[
              tw` flex items-center justify-center rounded-full  h-10 w-10 bg-[#D9D9D9] z-20`,
              globalStyles.buttonContainer,
            ]}
            onPress={() => {
              setTitle("");
              setChoices([]);
              setFields([]);
              setOpen(!open);
            }}
          >
            <Ionicons name="close-outline" size={17} color="#767676" />
          </TouchableOpacity>

          <View style={tw`p-3 pt-10 justify-center items-center`}>
            <TextInput
              style={tw`w-64 h-9 p-2 rounded-lg border border-[#A7A7A7] text-center`}
              placeholder="Enter Title"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
            <Text style={tw`text-[11px] text-red-500 mt-2`}>{error}</Text>

            <ScrollView style={tw`h-80 w-full`}>
              {fields.map((item, index) => (
                <TextInput
                  key={index}
                  style={tw`w-[15rem] h-9 p-2 rounded-full border border-[#A7A7A7] m-2`}
                  placeholder={`Option ${index + 1}`}
                  onChangeText={(text) => setOption(text)}
                />
              ))}

              {choices.length > 0 && (
                <TouchableOpacity
                  style={tw`w-70 h-13 rounded-full justify-center self-center items-center bg-[#013B4F] mt-14`}
                  onPress={() => save()}
                >
                  <Text style={tw`text-white font-bold`}>Save</Text>
                </TouchableOpacity>
              )}
            </ScrollView>

            <View style={tw`flex flex-row self-end p-2 mt-10`}>
              <TouchableOpacity
                style={tw`bg-[#013B4F] w-12 h-12 rounded-full items-center justify-center`}
                onPress={() => addOptionsField()}
              >
                <Entypo name="plus" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
