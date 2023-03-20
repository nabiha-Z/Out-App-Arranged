import React, { useEffect, useRef } from "react";
import { View } from "react-native";

const ProgressBar = () => {
  const progressBarWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return <View style={styles.container}></View>;
};

const styles = {
  container: {
    width: "35%",
    height: 6,
    backgroundColor: "#EEE",
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: -9,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1180B9",
  },
};

export default ProgressBar;
