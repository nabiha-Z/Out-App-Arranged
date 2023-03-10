import tw from "tailwind-react-native-classnames";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Buttons({ title, pageRedirect, icon }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`flex flex-row border-b border-gray-200 pb-4 mb-2`}
      onPress={() => navigation.navigate(pageRedirect)}
    >
      <Ionicons name={icon} size={16} color="#185C7E" />
      <View style={tw`w-40`}>
        <Text style={[tw`text-xs font-light mx-3`, { color: "#185C7E" }]}>
          {title}
        </Text>
      </View>

      <View style={tw`flex items-end w-32`}>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={15}
          color="#848484"
          style={tw`mr-5 `}
        />
      </View>
    </TouchableOpacity>
  );
}
