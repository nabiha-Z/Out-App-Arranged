import { useLayoutEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ParticipatingEvents from "../components/Events/MyEventsTab/participatingEvent";
import SelfEvents from "../components/Events/MyEventsTab/selfEvents";
import TopHeader from "../components/Navigation/topHeader";
import { Stack, useNavigation } from "expo-router";
import { globalStyles } from "../styles/globalStyles";

const Tab = createMaterialTopTabNavigator();

export default function MyEvents() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    TopHeader({ navigation });
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: "My Events",
          headerStyle: {
            backgroundColor: "white",
            height: 130,
          },
          headerTitleStyle: [
            globalStyles.screenHeaderStyles,
            { marginLeft: Platform.OS === "ios" ? 0 : 118 },
          ],
        }}
      />
      <Tab.Navigator
        screenOptions={{
          labelStyle: { fontSize: 14 },
          tabStyle: { flex: 1, justifyContent: "center" },
          indicatorStyle: {
            marginHorizontal: "5%",
            width: "40%",
          },
        }}
      >
        <Tab.Screen name="Created by me" component={SelfEvents} />
        <Tab.Screen name="Participating" component={ParticipatingEvents} />
      </Tab.Navigator>
    </>
  );
}
