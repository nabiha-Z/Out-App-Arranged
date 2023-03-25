module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ["./assets/fonts/"],
  dependencies: {
    "react-native-viewpager": {
      platforms: {
        android: null, // disable Android platform, other than that expo links it already
      },
    },
  },
};
