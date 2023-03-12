import { useLayoutEffect, useState } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import backgroundPattern from "../../../assets/images/pattern.png";
import { globalStyles } from "../../../globalStyles";
import Slider from "../../components/Chats/slider";
import user1 from "../../../assets/images/user-2.png";
import user2 from "../../../assets/images/user-3.png";
import { TextInput } from "react-native-paper";
import CustomModal from "../../components/Modal/modal";

export default function ChatScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const windowHeight = Dimensions.get("window").height;

  useLayoutEffect(() => {
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
  }, []);
  return (
    <View>
      <Image
        source={backgroundPattern}
        style={(globalStyles.bgImage, StyleSheet.absoluteFill)}
      />
      <View style={globalStyles.overlay} />
      <ScrollView style={{ height: windowHeight * 0.75 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={tw`p-7 pr-0`}
        >
          <Slider title="What time?" />
          <Slider title="Available?" />
        </ScrollView>

        <View style={tw`p-7 pt-0 w-56`}>
          <Image source={user1} />
          <View
            style={[
              tw`p-3 ml-3 mt-2 rounded-lg bg-[#013B4F]`,
              globalStyles.shadow,
            ]}
          >
            <Text style={tw`text-white`}>We’ll all meet there at noon!</Text>
          </View>
        </View>

        <View style={tw`flex items-end  p-7 pt-0`}>
          <Image source={user2} />
          <View
            style={[
              tw`p-3 mr-3 mt-2 rounded-lg bg-[#1180B9]`,
              globalStyles.shadow,
            ]}
          >
            <Text style={tw`text-white`}>Yoo!</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={[
          tw` flex-row bg-white justify-between items-center p-12 pt-4 px-5`,
        ]}
      >
        <Ionicons
          name="md-attach-sharp"
          size={35}
          color="#646464"
          style={tw`mt-4`}
        />

        <View style={tw`w-40`}>
          <TextInput
            style={tw`bg-slate-100 text-sm text-slate-400`}
            placeholder="Type message..."
          />
        </View>
        <TouchableOpacity
          style={[
            tw`mt-3 p-3 rounded-full h-12 bg-[#1180B9]`,
            globalStyles.shadow,
          ]}
        >
          <Feather name="plus" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            tw`mt-3 p-3 rounded-full bg-white h-12 `,
            globalStyles.shadow,
          ]}
        >
          <Ionicons name="md-send" size={24} color="#1180B9" />
        </TouchableOpacity>
      </View>

      <CustomModal open={open} setOpen={setOpen} />
    </View>
  );
}
