import { TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TopHeader({ navigation, setOpen, open }) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <View style={tw`mx-5`}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </View>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <View style={{ marginRight: 15 }}>
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
