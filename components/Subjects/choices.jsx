import tw from "twrnc";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import Slider from "../Chats/slider";

export default function Choices({ width, heigth }) {
  const [choices, setChoices] = useState([]);

  return (
    <>
      <Slider title="What time?" width={width} heigth={heigth} />
      
      {choices.map((item) => (
        <Slider
          key={item.id}
          title="What time?"
          width={width}
          heigth={heigth}
        />
      ))}

      <TouchableOpacity
        onPress={() =>
          setChoices([
            ...choices,
            {
              id: choices.length + 1,
              editable: true,
            },
          ])
        }
        style={tw`bg-[#1180B9] w-12 h-12 rounded-full justify-center self-end items-center m-6`}
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </>
  );
}
