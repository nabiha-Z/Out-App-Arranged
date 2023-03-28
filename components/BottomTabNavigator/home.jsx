import { Link, useRouter } from "expo-router";
import { Touchable } from "react-native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";
import { globalStyles } from "../../styles/globalStyles";
import SearchHeader from "../Header/searchHeader";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <SearchHeader paddingTop={16} />
      <View style={tw`flex h-full justify-center items-center bg-gray-100`}>
        <Text>This would be the map screen</Text>
        <View
          style={tw`flex flex-row flex-wrap items-center justify-between w-70 m-4 `}
        >
          <TouchableOpacity
            style={tw`bg-amber-50 w-22 h-10 items-center justify-center rounded`}
            onPress={() => router.push("/myEvents")}
          >
            <Text style={globalStyles.poppinsFont}>My Event</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-lime-100 w-22 h-10 items-center justify-center rounded`}
            onPress={() => router.push("/list")}
          >
            <Text style={globalStyles.poppinsFont}>Event List</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-teal-100 w-22 h-10 items-center justify-center rounded`}
            onPress={() => router.push("/createEvent")}
          >
            <Text style={globalStyles.poppinsFont}>Create Event</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-teal-100 w-22 h-10 items-center justify-center rounded`}
            onPress={() => router.push("/details")}
          >
            <Text style={globalStyles.poppinsFont}>Event</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-lime-100 w-22 h-10 items-center justify-center rounded`}
            onPress={() => router.push("/cart")}
          >
            <Text style={globalStyles.poppinsFont}>Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
