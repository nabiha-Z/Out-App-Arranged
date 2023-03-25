import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import tw from "twrnc";
import { authStyles } from "./authStyles";
import GoogleIcon from "../../assets/images/search.png";
import FacebookIcon from "../../assets/images/facebook.png";
import AppleIcon from "../../assets/images/apple-logo.png";
import LeftArrowIcon from "../../assets/images/left-arrow.png";
import { Dimensions } from "react-native";
import Vector1 from "../../assets/images/vector.png";
import Vector2 from "../../assets/images/vector-2.png";
import blurBox from "../../assets/images/blur-rectangle.png";
import background from "../../assets/images/ellipse.png";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../styles/globalStyles";
import { Link, Stack, useRouter } from "expo-router";

export default function Banner({ operation, header }) {
  const pageCheck = operation === "Sign Up" ? true : false;
  const navigation = useNavigation();
  const router = useRouter();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={authStyles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Image
        source={background}
        style={[authStyles.image, StyleSheet.absoluteFill]}
      />
      <TouchableOpacity
        style={[
          tw`m-6 bg-white w-10 h-10 items-center justify-center rounded`,
          { marginTop: windowHeight / 10 },
        ]}
        onPress={() => navigation.pop()}
      >
        <Image source={LeftArrowIcon} style={tw`w-5 h-5`} />
      </TouchableOpacity>
      <Image
        source={Vector2}
        style={[authStyles.vector2, { top: windowHeight * 0.2 }]}
      />

      <Image
        source={Vector1}
        style={[authStyles.vector1, { top: windowHeight * 0.213 }]}
      />
      <View style={tw`items-center `}>
        <Image
          source={blurBox}
          style={[
            authStyles.transparentBox,
            { height: windowHeight * 0.8, width: windowWidth * 0.98 },
          ]}
        />
        <View style={authStyles.content}>
          <View style={authStyles.textContainer}>
            <Text style={[authStyles.text, tw`uppercase text-lg`]}>
              {header}
            </Text>
            {pageCheck && <Text style={authStyles.text}>Today</Text>}
          </View>

          <View style={[tw`items-center`, { top: 215 }]}>
            <TouchableOpacity
              style={authStyles.authButtons}
              onPress={() => router.push("/dashboard")}
            >
              <Image source={GoogleIcon} style={tw`m-6 w-5 h-5`} />
              <Text style={[tw`text-sm ml-3`, globalStyles.poppinsFont]}>
                {operation} with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={authStyles.authButtons}
              onPress={() => router.push("/details")}
            >
              <Image source={AppleIcon} style={tw`m-6 w-5 h-5`} />
              <Text style={[tw`text-sm ml-3`, globalStyles.poppinsFont]}>
                {operation} with Apple
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={authStyles.authButtons}
              onPress={() => router.push("/chat")}
            >
              <Image source={FacebookIcon} style={tw`m-6 w-5 h-5`} />
              <Text style={[tw`text-sm ml-3`, globalStyles.poppinsFont]}>
                {operation} with Facebook
              </Text>
            </TouchableOpacity>

            {pageCheck && (
              <View style={tw`flex flex-row mt-5`}>
                <Text style={globalStyles.poppinsFont}>
                  Already have an account?
                </Text>
                <Link href="/signin">
                  <View
                    style={tw`ml-1`}
                    onPress={() => navigation.navigate("SigninScreen")}
                  >
                    <Text style={[tw`text-blue-300`, globalStyles.poppinsFont]}>
                      Login
                    </Text>
                  </View>
                </Link>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
