import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: 200,
    height: 300,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredImage: {
    width: 100,
    height: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.94)",
  },

  text: {
    fontFamily: "Poppins-Regular",
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 34,
    letterSpacing: 0.4,
    color: "#1180B9",
    width: 500,
  },

  startButton: {
    backgroundColor: "#013B4F",
  },
});
