import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import SearchHeader from "../Header/searchHeader";

export default function Home() {
  return (
    <>
      <SearchHeader />
      <View style={tw`flex h-full justify-center items-center bg-gray-100`}>
        <Text>This would be the map screen</Text>
      </View>
    </>
  );
}
