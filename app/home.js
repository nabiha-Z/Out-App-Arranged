import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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

import whiteOverlay from "../assets/images/white-overlay.jpeg";

export default function Home() {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  const router = useRouter();

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Image
        source={BackgroundMask}
        style={tw`w-${windowWidth * 0.31} h-${windowHeight * 0.25} absolute`}
      />

      <ScrollView style={tw`h-${windowHeight * 0.29}`}>
        <View style={tw`flex items-center`}>
          <Image
            source={TopOverlay}
            style={tw`w-${windowWidth * 0.26} absolute`}
          />
          <View style={[tw`absolute z-20 bg-red-300`, homeStyles.overlay, ,]} />

          <View
            style={[
              tw`h-${windowHeight} w-${windowWidth} items-center`,
              homeStyles.overlay,
            ]}
          >
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

            <View style={[tw`m-8 mb-2 pt-2 w-${windowWidth * 0.15}`]}>
              <Text
                style={[
                  homeStyles.text,
                  globalStyles.poppinsFontBold,
                  tw`text-black `,
                ]}
              >
                Find or create
              </Text>
              <Text style={[homeStyles.text]}>your events</Text>
              <Text
                style={[tw`mt-4 text-[13px] w-65`, globalStyles.poppinsFont]}
              >
                This is the best app for events management you can find the
                available events nearby locations now!
              </Text>
            </View>

            <TouchableOpacity
              style={tw`self-center rounded-full p-3 mt-9 w-72 bg-[#013B4F] mb-5`}
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
      </ScrollView>
    </View>
  );
}
