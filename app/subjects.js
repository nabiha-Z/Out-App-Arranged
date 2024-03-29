import { useEffect, useState, useLayoutEffect } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation, Stack } from "expo-router";

import { tabsData } from "../dummyData/data";
import { changeActive } from "../helpers/tabs";
import { globalStyles } from "../styles/globalStyles";
import TopHeader from "../components/Navigation/topHeader";

export default function Subjects() {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get("window").height;

  const [categories, setCategories] = useState([
    { title: "All", active: true, key: "all" },
    { title: "Multiple Choice", active: false, key: "choices" },
    { title: "Yes/No", active: false, key: "yesNo" },
    { title: "Taks", active: false, key: "tasks" },
  ]);
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(tabsData.all.data);
  }, []);

  useLayoutEffect(() => {
    TopHeader({ navigation });
  }, []);

  const Tabs = ({ item, key }) => {
    return (
      <TouchableOpacity
        key={item._id}
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
      <Stack.Screen
        options={{
          title: "Subjects",
          headerStyle: {
            backgroundColor: "white",
            height: 130,
          },
          headerTitleStyle: globalStyles.screenHeaderStyles,
        }}
      />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={tw`flex flex-row m-3 justify-between items-center`}>
          {categories.map((item) => (
            <Tabs item={item} />
          ))}
        </View>
      </ScrollView>

      <ScrollView
        style={tw`h-[45rem]`}
        contentContainerStyle={tw`justify-between items-center m-4 p-5 pb-32`}
      >
        {content}
      </ScrollView>
    </View>
  );
}
