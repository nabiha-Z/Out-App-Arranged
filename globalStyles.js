import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(214, 240, 254,0.24)",
  },

  shadow: {
    elevation: 6, // adds shadow on Android
    shadowColor: "#4E5051", // adds shadow on iOS
    shadowOffset: { width: 3, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowSpread: 5,
  },
  endAlign: {},
});
