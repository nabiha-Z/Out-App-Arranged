import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  vector1: {
    position: "absolute",
    zIndex: 2,
    left: "31.75%",
    right: "58.53%",
    bottom: "75.77%",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    transform: [{ rotate: "-1.62deg" }],
  },
  vector2: {
    position: "absolute",
    left: "34.2%",
    right: "48.24%",
    top: "16.74%",
    bottom: "81.23%",
    transform: [{ rotate: "-1.62deg" }],
  },
  transparentBox: {
    position: "absolute",
    shadowColor: "#626262",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.03,
    shadowRadius: 24,
    overflow: "hidden",
  },

  content: {
    position: "absolute",
    zIndex: 2,
    height: 540,
  },
  textContainer: {
    position: "absolute",
    width: 177,
    height: 40,
    left: 27,
    top: 150,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.4,
    color: "#232323",
    width: 400,
  },

  authButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 280,
    height: 60,
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    shadowColor: "rgba(0, 0, 0,0.4)",
    shadowOffset: {
      width: 0,
      height: 10.4608,
    },
    shadowOpacity: 0.03,
    shadowRadius: 30.4314,
    elevation: 10,
  },
});
