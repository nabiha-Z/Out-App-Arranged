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
    elevation: 7,
    shadowColor: "#3C3D3E",
    shadowOffset: { width: 40, height: 27 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowSpread: 50,
  },
  highlightedShadow: {
    shadowColor: "#1180B9",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 5, // This is required for Android
  },
  centeredView: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lowerView: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  shareModalView: {
    width: "100%",
    height: "75%",
    backgroundColor: "white",
    padding: 0,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  rotate: {
    transform: [{ rotate: "90deg" }],
  },

  screenHeaderStyles: {
    fontFamily: "Poppins-Regular",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 1,
  },

  tabHeaderStyles: {
    fontFamily: "Poppins-Regular",
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 1,
    left: 118,
    top: 25,
  },
  poppinsFont: {
    fontFamily: "Poppins-Regular",
  },

  poppinsFontBold: {
    fontFamily: "Poppins-Bold",
  },

  interFont: {
    fontFamily: "Inter-Regular",
  },
});
