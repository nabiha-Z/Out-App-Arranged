import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { homeStyles } from "./homeStyles";

import { Dimensions } from "react-native";
import TopOverlay from "../../../assets/images/rectangle-4.png";
import BackgroundMask from "../../../assets/images/Mask-group.png";
import OutLogo from "../../../assets/images/out-logo-dark.png";
import HomeLogo from "../../../assets/images/home-banner-logo.png";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../../globalStyles";

export default function Home() {
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  return (
    <View>
      <Image source={BackgroundMask} style={StyleSheet.absoluteFill} />

      <View style={tw`flex items-center`}>
        <Image source={TopOverlay} style={StyleSheet.absoluteFill} />
        <View style={[homeStyles.overlay, { height: windowHeight * 1.7 }]} />

        <View
          style={[
            tw`items-center justify-center`,
            { marginTop: windowHeight * 0.09 },
          ]}
        >
          <Text
            style={[
              tw`text-black text-sm text-center m-5 mb-9`,
              globalStyles.interFont,
            ]}
          >
            Welcome to OUT App!
          </Text>
          <Image source={OutLogo} style={tw`m-auto`} />
          <Image source={HomeLogo} style={tw`m-7`} />
        </View>
      </View>

      <View style={[tw`m-8 ml-14`]}>
        <Text
          style={[
            homeStyles.text,
            globalStyles.poppinsFontBold,
            tw`text-black`,
          ]}
        >
          Find or create
        </Text>
        <Text style={[homeStyles.text]}>
          your events
        </Text>
        <Text style={[tw`mt-4 text-[13px]`, globalStyles.poppinsFont]}>
          This is the best app for events management you can find the available
          events nearby locations now!
        </Text>
      </View>

      <View style={[tw`ml-10`, { marginTop: windowHeight * 0.01 }]}>
        <TouchableOpacity
          style={[tw`rounded-full p-2 mt-9 w-72`, homeStyles.startButton]}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text style={[tw`text-white text-center`, globalStyles.poppinsFont]}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}