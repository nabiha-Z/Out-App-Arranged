import { useState, useEffect } from "react";
import * as Font from "expo-font";

const customFonts = {
  "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  "Inter-Regular": require("./assets/fonts/Inter/Inter-VariableFont_slnt.ttf"),
};

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(customFonts);
    }

    loadFonts();
  }, []);
}
