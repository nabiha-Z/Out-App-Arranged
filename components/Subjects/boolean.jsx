import { useState } from "react";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import { globalStyles } from "../../styles/globalStyles";
import ChoicesModal from "../Modal/ChoicesModal";

export default function Boolean() {
  const [open, setOpen] = useState(false);
  const [title, setTile] = useState("");
  const [options, setOptions] = useState([]);

  return (
    <View style={tw`flex justify-center items-center pb-20`}>
      {options.map((item) => (
        <View
          key={item.id}
          style={[
            tw`bg-white rounded-lg w-82 h-48 m-2 mb-3`,
            globalStyles.shadow,
          ]}
        >
          <View style={tw`rounded-t-lg p-3 bg-[#013B4F] mb-2`}>
            <Text style={tw`text-white font-bold text-[17px] text-center`}>
              {item.title}
            </Text>
          </View>

          {item.choices.map((element, index) => (
            <TouchableOpacity
              style={[
                tw`flex-row justify-center self-center items-center rounded-full m-2 mx-3 ${
                  index % 2 === 0 ? "bg-[#013B4F]" : "bg-white"
                }  h-10 w-50`,
                globalStyles.shadow,
              ]}
            >
              <Text
                style={tw`mr-2 mt-1  ${
                  index % 2 === 0 ? "text-white" : "text-black"
                }`}
              >
                {element}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <TouchableOpacity
        onPress={() => setOpen(!open)}
        style={tw`bg-[#1180B9] w-12 h-12 rounded-full justify-center self-end items-center m-6`}
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>

      <ChoicesModal
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTile}
        options={options}
        setOptions={setOptions}
      />
    </View>
  );
}
