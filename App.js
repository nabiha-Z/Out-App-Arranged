import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import Signup from "./src/screens/Auth/signup";
import Signin from "./src/screens/Auth/signin";
import Home from "./src/screens/HomeScreen/home";
import LoadingScreen from "./src/screens/HomeScreen/loadingScreen";

const customFonts = {
  "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  "Poppins-Light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
  "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
};

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (fontsLoaded) {
    console.log("font loaded");
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={() => ({
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          })}
        />
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={() => ({
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          })}
        />
        <Stack.Screen
          name="SignupScreen"
          component={Signup}
          options={() => ({
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          })}
        />

        <Stack.Screen
          name="SigninScreen"
          component={Signin}
          options={({ navigation, route }) => ({
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
