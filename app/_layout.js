import { Stack } from "expo-router";
import { useEffect } from "react";
import * as Font from "expo-font";

const customFonts = {
  "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
  "Inter-Regular": require("../assets/fonts/Inter/static/Inter-Regular.ttf"),
  "Inter-Bold": require("../assets/fonts/Inter/static/Inter-Bold.ttf"),
};

export default function Layout() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(customFonts);
    }
    loadFonts();
  }, []);

  return (
    <>
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerStyle: {
            backgroundColor: "white",
            height: 110,
          },
        }}
      />
    </>
  );
}
