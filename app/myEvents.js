import { useLayoutEffect } from "react";
import ParticipatingEvents from "../components/Events/MyEventsTab/participatingEvent";
import SelfEvents from "../components/Events/MyEventsTab/selfEvents";
import TopHeader from "../components/Navigation/topHeader";
import { Stack, useNavigation } from "expo-router";
import { globalStyles } from "../styles/globalStyles";

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
          headerTitleStyle: globalStyles.screenHeaderStyles,
        }}
      />
    </>
  );
}
