import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import SearchHeader from "../Header/searchHeader";

export default function Home() {
  const navigation = useNavigation();
  return (
    <>
      <SearchHeader paddingTop={16} />
      <View style={tw`flex h-full justify-center items-center bg-gray-100`}>
        <Text>This would be the map screen</Text>
        <TouchableOpacity
          style={tw`bg-gray-300 w-20 h-10 items-center justify-center rounded-xl`}
          onPress={() => navigation.navigate("MyEvents")}
        >
          <Text>My Event</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
