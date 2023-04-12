import tw from "twrnc";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import Slider from "./slider";
import ChoicesModal from "../Modal/ChoicesModal";

export default function Choices({ width, heigth }) {
  const [open, setOpen] = useState(false);
  const [title, setTile] = useState("");
  const [options, setOptions] = useState([]);

  return (
    <>
      {options.map((item) => (
        <Slider
          key={item.id}
          title={item.title}
          choices={item.choices ? item.choices : []}
          width={width}
          heigth={heigth}
        />
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
    </>
  );
}
