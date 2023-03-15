import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import TopHeader from "../../components/Navigation/topHeader";
import { tabsData } from "../../dummyData/data";
import { changeActive } from "../../helpers/tabs";
import { globalStyles } from "../../../globalStyles";
import { Feather } from "@expo/vector-icons";

export default function Subjects({ navigation }) {
  const [categories, setCategories] = useState([
    { title: "All", active: true, key: "all" },
    { title: "Multiple Choice", active: false, key: "choices" },
    { title: "Yes/No", active: false, key: "yesNo" },
    { title: "Taks", active: false, key: "tasks" },
  ]);
  const [content, setContent] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    setContent(tabsData.all.data);
  }, []);

  useLayoutEffect(() => {
    TopHeader({ navigation });
  }, []);

  const Tabs = ({ item }) => {
    console.log("itemhjhj: ", item.title);
    return (
      <TouchableOpacity
        style={[
          tw`px-4 h-9 m-1 rounded-full items-center justify-center ${
            item.active ? "bg-[#013B4F]" : "bg-[#BDBDBD]"
          }`,
          globalStyles.shadow,
        ]}
        onPress={() =>
          changeActive({ item, categories, setCategories, setContent })
        }
      >
        <Text
          style={tw`text-center text-white ${
            item.active ? "text-white" : "text-[#7D7D7D]"
          }`}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={tw`flex flex-row m-3 justify-between items-center`}>
          {categories.map((item) => (
            <Tabs item={item} />
          ))}
        </View>
      </ScrollView>

      <ScrollView
        style={tw`h-105 m-4 p-5`}
        contentContainerStyle={tw`justify-between items-center`}
      >
        {content}
      </ScrollView>
      <TouchableOpacity
        style={tw`bg-[#1180B9] w-12 h-12 rounded-full justify-center self-end items-center m-6`}
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
