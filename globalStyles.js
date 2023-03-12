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
    elevation: 6,
    shadowColor: "#4E5051",
    shadowOffset: { width: 3, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowSpread: 5,
  },
  centeredView: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "center",
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

  buttonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
