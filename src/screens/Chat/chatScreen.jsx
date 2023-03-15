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
import ChatFooter from "../../components/Chats/footer";
import CustomModal from "../../components/Modal/Chatmodal";

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

      <ChatFooter screen="chat" />

      <CustomModal open={open} setOpen={setOpen} />
    </View>
  );
}
