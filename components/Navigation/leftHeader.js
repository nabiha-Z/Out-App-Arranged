import tw from "twrnc";
import { useLayoutEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function LeftHeader({ navigation }) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <View style={tw`mx-3`}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </View>
      </TouchableOpacity>
    ),
  });
}
