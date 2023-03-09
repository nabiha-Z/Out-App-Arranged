import { StyleSheet, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { homeStyles } from "./homeStyles";
import { Dimensions } from "react-native";
import BackgroundMask from "../../../assets/images/Mask-group.png";
import Overlay from "../../../assets/images/Rectangle-2.png";
import OutLogo from "../../../assets/images/Out-Logo.png";

export default function LoadingScreen() {
  const windowHeight = Dimensions.get("window").height;
  return (
    <View>
      <Image
        source={BackgroundMask}
        style={(homeStyles.bgImage, StyleSheet.absoluteFill)}
      />

      <View style={tw`flex-1 items-center`}>
        <Image
          source={Overlay}
          style={(homeStyles.bgImage, StyleSheet.absoluteFill)}
        />
        <View style={{ marginTop: windowHeight * 0.5 }}>
          <Image source={OutLogo} />
        </View>
      </View>
    </View>
  );
}
