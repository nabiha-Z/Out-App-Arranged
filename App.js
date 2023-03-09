import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./src/screens/Auth/signup";
const Stack = createStackNavigator();

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // async function loadFonts() {
  //   await Font.loadAsync({
  //     Poppins: require("./assets/fonts/Poppins/Poppins-Light.ttf"),
  //   });
  //   setFontLoaded(true);
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SingupScreen"
          component={Signup}
          options={({ navigation, route }) => ({
            title: "",
            headerStyle: {
              // backgroundColor: "#47A7AB",
              height: 0,
            },
            headerLeft: null,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
