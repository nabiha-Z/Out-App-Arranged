import { TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TopHeader({ navigation }) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <View style={tw`mx-2`}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </View>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity>
        <View style={{ marginRight: 10 }}>
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
