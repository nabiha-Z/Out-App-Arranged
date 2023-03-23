import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import tw from "twrnc";
import { Stack, useRouter } from "expo-router";

import { homeStyles } from "../styles/homeStyles";
import TopOverlay from "../assets/images/rectangle-4.png";
import BackgroundMask from "../assets/images/Mask-group.png";
import OutLogo from "../assets/images/out-logo-dark.png";
import HomeLogo from "../assets/images/home-banner-logo.png";
import { globalStyles } from "../styles/globalStyles";

export default function Home() {
  const windowHeight = Dimensions.get("window").height;
  const router = useRouter();

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
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
              globalStyles.poppinsFont,
            ]}
          >
            Welcome to OUT App!
          </Text>
          <Image source={OutLogo} style={tw`m-auto`} />
          <Image source={HomeLogo} style={tw`m-7`} />
        </View>
      </View>

      <View style={[tw`m-8 mb-2 ml-14`]}>
        <Text
          style={[
            homeStyles.text,
            globalStyles.poppinsFontBold,
            tw`text-black`,
          ]}
        >
          Find or create
        </Text>
        <Text style={[homeStyles.text]}>your events</Text>
        <Text style={[tw`mt-4 text-[13px]`, globalStyles.poppinsFont]}>
          This is the best app for events management you can find the available
          events nearby locations now!
        </Text>
      </View>

      <View style={[tw`ml-10`, { marginTop: windowHeight * 0.02 }]}>
          <TouchableOpacity
            style={[tw`rounded-full p-3 mt-9 w-72`, homeStyles.startButton]}
            onPress={() => router.push("/signup")}
          >
            <Text
              style={[tw`text-white text-center`, globalStyles.poppinsFont]}
            >
              Get Started
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
