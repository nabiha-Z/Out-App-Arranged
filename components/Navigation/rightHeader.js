import tw from "twrnc";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RightHeader({ navigation }) {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity>
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
