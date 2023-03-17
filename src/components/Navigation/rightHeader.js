import tw from "twrnc";
import { useLayoutEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function RightHeader({ navigation }) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <View style={tw`mr-8`}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>
    ),
  });
}
