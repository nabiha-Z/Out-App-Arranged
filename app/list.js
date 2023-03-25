import { useLayoutEffect } from "react";
import { useNavigation, Stack, Tabs } from "expo-router";

import TopHeader from "../components/Navigation/topHeader";
import { globalStyles } from "../styles/globalStyles";
import SharedEvents from "../components/Events/SharedEventsTab/sharedEvents";


export default function EventsList() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    TopHeader({ navigation });
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Events",
          headerTitleStyle: globalStyles.screenHeaderStyles,
        }}
      />
      {/* <Tab.Navigator
        screenOptions={{
          labelStyle: { fontSize: 14 },
          tabStyle: { flex: 1, justifyContent: "center" },
          indicatorStyle: {
            marginHorizontal: "5%",
            width: "40%",
            fontSize: 40,
          },
        }}
      >
        <Tab.Screen name="Shared with you" component={SharedEvents} />
        <Tab.Screen name="Saved" component={SharedEvents} />
      </Tab.Navigator> */}

      <Tabs>
        {/* The screens will now show up from left to right: index, settings, all other routes... */}
        <Tabs.Screen name="createEvent" />
        <Tabs.Screen name="subjects" />
      </Tabs>
    </>
  );
}