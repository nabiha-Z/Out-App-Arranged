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
        <View style={tw`flex flex-row items-center justify-between w-70 m-4 `}>
          <TouchableOpacity
            style={tw`bg-red-200 w-20 h-10 items-center justify-center rounded`}
            onPress={() => navigation.navigate("MyEvents")}
          >
            <Text>My Event</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-cyan-300 w-20 h-10 items-center justify-center rounded`}
            onPress={() => navigation.navigate("EventList")}
          >
            <Text>Event List</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-teal-300 w-20 h-10 items-center justify-center rounded`}
            onPress={() => navigation.navigate("NewEvent")}
          >
            <Text>Create Event</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
