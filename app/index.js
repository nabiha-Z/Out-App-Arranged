import { useState, useRef, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";
import { homeStyles } from "../styles/homeStyles.js";
import { Dimensions } from "react-native";
import BackgroundMask from "../assets/images/Mask-group.png";
import Overlay from "../assets/images/Rectangle-2.png";
import OutLogo from "../assets/images/Out-Logo.png";
import { useRouter, Stack } from "expo-router";

export default function LoadingScreen() {
  const router = useRouter();
  const windowHeight = Dimensions.get("window").height;
  const [startAnimation, setAnimation] = useState(new Animated.Value(0));
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const startTitle = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(startAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      router.push("/home");
    }, 3000);
  }, []);

  return (
    <Animated.View>
      <Stack.Screen options={{ headerShown: false }} />
      <Image
        source={BackgroundMask}
        style={(homeStyles.bgImage, StyleSheet.absoluteFill)}
      />

      <View style={tw`flex items-center`}>
        <Image
          source={Overlay}
          style={(homeStyles.bgImage, StyleSheet.absoluteFill)}
        />
        <Animated.View
          animation="fadeIn"
          duration={4000}
          delay={100}
          style={{ marginTop: windowHeight * 0.5 }}
        >
          <Image source={OutLogo} />
        </Animated.View>
        <View style={{ marginTop: windowHeight * 0.2 }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </View>
    </Animated.View>
  );
}