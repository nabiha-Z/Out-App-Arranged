import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";

const ProgressBar = () => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const progressBarWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.progressBar, { width: progressBarWidth }]}
      />
    </View>
  );
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
