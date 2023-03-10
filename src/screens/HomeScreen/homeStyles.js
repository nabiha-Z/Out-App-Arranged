import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
  },

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

  content: {},
  text: {
    fontFamily: "Poppins-Regular",
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 30,
    letterSpacing: 0.8,
    color: "#1180B9",
    width: 500,
  },

  startButton: {
    backgroundColor: "#013B4F",
  },
});
