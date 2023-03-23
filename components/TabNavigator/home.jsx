import { Link } from "expo-router";
import { View, Text } from "react-native";
import tw from "twrnc";
import { globalStyles } from "../../styles/globalStyles";
import SearchHeader from "../Header/searchHeader";

export default function Home() {
  return (
    <>
      <SearchHeader paddingTop={16} />
      <View style={tw`flex h-full justify-center items-center bg-gray-100`}>
        <Text>This would be the map screen</Text>
        <View style={tw`flex flex-row items-center justify-between w-70 m-4 `}>
          <Link href="/myEvents">
            <View
              style={tw`bg-amber-50 w-22 h-10 items-center justify-center rounded`}
            >
              <Text style={globalStyles.poppinsFont}>My Event</Text>
            </View>
          </Link>

          <Link href="/list">
            <View
              style={tw`bg-lime-100 w-22 h-10 items-center justify-center rounded`}
            >
              <Text style={globalStyles.poppinsFont}>Event List</Text>
            </View>
          </Link>
          <Link href="/createEvent">
            <View
              style={tw`bg-teal-100 w-22 h-10 items-center justify-center rounded`}
            >
              <Text style={globalStyles.poppinsFont}>Create Event</Text>
            </View>
          </Link>
        </View>
      </View>
    </>
  );
}
