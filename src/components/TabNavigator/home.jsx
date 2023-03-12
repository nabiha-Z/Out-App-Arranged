import { View, Text } from "react-native";
import tw from "twrnc";
import SearchHeader from "../Header/searchHeader";

export default function Home() {
  return (
    <>
      <SearchHeader paddingTop={16} />
      <View style={tw`flex h-full justify-center items-center bg-gray-100`}>
        <Text>This would be the map screen</Text>
      </View>
    </>
  );
}
