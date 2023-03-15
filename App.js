import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "twrnc";
import * as Font from "expo-font";
import Signup from "./src/screens/Auth/signup";
import Signin from "./src/screens/Auth/signin";
import Home from "./src/screens/HomeScreen/home";
import ChatScreen from "./src/screens/Chat/chatScreen";
import Dashobard from "./src/screens/Dashboard/dashobard";
import LoadingScreen from "./src/screens/HomeScreen/loadingScreen";
import MyEvents from "./src/screens/Events/myEvents";
import EventsList from "./src/screens/Events/list";
import Event from "./src/screens/Events/event";
import Choices from "./src/screens/Chat/choices";

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
          name="Dashboard"
          component={Dashobard}
          options={() => ({
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          })}
        />
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
          options={() => ({
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          })}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({ navigation }) => ({
            title: "Messaging",
            headerStyle: {
              backgroundColor: "rgba(214, 240, 254,0.24)",
              height: 110,
            },
            headerTitleStyle: {
              marginLeft: 50,
              fontSize: 18,
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: 1,
            },
          })}
        />

        <Stack.Screen
          name="Choices"
          component={Choices}
          options={({ navigation }) => ({
            title: "Multiple Choices",
            headerStyle: {
              backgroundColor: "#F1F3F5",
              height: 110,
            },
            headerTitleStyle: {
              marginLeft: 25,
              fontSize: 18,
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: 1,
            },
          })}
        />

        <Stack.Screen
          name="EventList"
          component={EventsList}
          options={({ navigation }) => ({
            title: "Event Lists",
            headerStyle: {
              backgroundColor: "white",
              height: 110,
            },
            headerTitleStyle: {
              marginLeft: 10,
              fontSize: 18,
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: 1,
            },
          })}
        />
        <Stack.Screen
          name="MyEvents"
          component={MyEvents}
          options={({ navigation }) => ({
            title: "My events",
            headerStyle: {
              backgroundColor: "white",
              height: 110,
            },
            headerTitleStyle: {
              marginLeft: 10,
              fontSize: 18,
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: 1,
            },
          })}
        />
        <Stack.Screen
          name="Event"
          component={Event}
          options={({ navigation }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "white",
              height: 110,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
