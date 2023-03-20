import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import Signup from "./src/screens/Auth/signup";
import Signin from "./src/screens/Auth/signin";
import Home from "./src/screens/HomeScreen/home";
import Cart from "./src/screens/Cart/cart";
import Event from "./src/screens/Events/event";
import Choices from "./src/screens/Chat/choices";
import EventsList from "./src/screens/Events/list";
import NewEvent from "./src/screens/Events/newEvent";
import MyEvents from "./src/screens/Events/myEvents";
import Subjects from "./src/screens/Subjects/subjects";
import ChatScreen from "./src/screens/Chat/chatScreen";
import Checkout from "./src/screens/Checkout/checkout";
import Dashobard from "./src/screens/Dashboard/dashobard";
import LoadingScreen from "./src/screens/HomeScreen/loadingScreen";
import { globalStyles } from "./globalStyles";

const customFonts = {
  "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
  "Inter-Regular": require("./assets/fonts/Inter/Inter-VariableFont_slnt.ttf"),
};

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(customFonts);
    }

    loadFonts();
  }, []);

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
            headerTitleStyle: globalStyles.screenHeaderStyles,
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
            headerTitleStyle: [
              globalStyles.screenHeaderStyles,
              { marginLeft: 25 },
            ],
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
            headerTitleStyle: [
              globalStyles.screenHeaderStyles,
              { marginLeft: 10 },
            ],
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
            headerTitleStyle: [
              globalStyles.screenHeaderStyles,
              { marginLeft: 10 },
            ],
          })}
        />
        <Stack.Screen
          name="NewEvent"
          component={NewEvent}
          options={({ navigation }) => ({
            title: "Event Creation",
            headerStyle: {
              backgroundColor: "white",
              height: 110,
            },
            headerTitleStyle: [
              globalStyles.screenHeaderStyles,
              { marginLeft: 40 },
            ],
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

        <Stack.Screen
          name="Subjects"
          component={Subjects}
          options={({ navigation }) => ({
            title: "Subjects",
            headerStyle: {
              backgroundColor: "#F1F3F5",
              height: 110,
            },
            headerTitleStyle: {
              marginLeft: 70,
              fontSize: 18,
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: 1,
            },
          })}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={({ navigation }) => ({
            title: "My Cart",
            headerStyle: {
              backgroundColor: "#F8FAFB",
              height: 110,
            },
            headerTitleStyle: {
              marginLeft: 65,
              fontSize: 18,
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: 1,
            },
          })}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={({ navigation }) => ({
            title: "Checkout",
            headerStyle: {
              backgroundColor: "#F8FAFB",
              height: 110,
            },
            headerTitleStyle: {
              marginLeft: 65,
              fontSize: 18,
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: 1,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
