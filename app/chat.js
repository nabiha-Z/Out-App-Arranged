import { useLayoutEffect, useState } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation, Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import backgroundPattern from "../assets/images/pattern.png";
import { globalStyles } from "../styles/globalStyles";
import Slider from "../components/Chats/slider";
import user1 from "../assets/images/user-2.png";
import user2 from "../assets/images/user-3.png";
import ChatFooter from "../components/Chats/footer";
import CustomModal from "../components/Modal/Chatmodal";
import LeftHeader from "../components/Navigation/leftHeader";

export default function ChatScreen() {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const windowHeight = Dimensions.get("window").height;

  useLayoutEffect(() => {
    LeftHeader({ navigation });
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <View style={tw`mr-4`}>
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
      <Stack.Screen
        options={{
          title: "Messaging",
          headerStyle: {
            backgroundColor: "rgb(241, 245, 245)",
            height: 140,
          },
          headerTitleStyle: [
            globalStyles.screenHeaderStyles,
            { marginLeft: Platform.OS === "ios" ? 0 : 118 },
          ],
        }}
      />

      <Image
        source={backgroundPattern}
        style={(globalStyles.bgImage, StyleSheet.absoluteFill)}
      />
      <View style={globalStyles.overlay} />
      <ScrollView style={{ height: windowHeight * 0.75 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={tw`p-3 px-7`}
        >
          <Slider title="What time?" width={50} heigth={32} />
          <Slider title="Available?" width={50} heigth={32} />
        </ScrollView>

        <View style={tw`px-7 pb-7 w-56`}>
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
