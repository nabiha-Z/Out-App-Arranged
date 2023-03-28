import { useEffect, useLayoutEffect, useState } from "react";
import tw from "twrnc";
import { Stack } from "expo-router";
import { View } from "react-native";
import { useNavigation } from "expo-router";

import TopHeader from "../components/Navigation/topHeader";
import { globalStyles } from "../styles/globalStyles";

import ParticipatingEvents from "../components/Events/MyEventsTab/participatingEvent";
import SelfEvents from "../components/Events/MyEventsTab/selfEvents";
import TabButtons from "../components/TopTabNavigator/eventTabs";

export default function EventsList() {
  const [currentContent, setCurrentContent] = useState();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    TopHeader({ navigation });
  }, []);

  useEffect(() => {
    setCurrentContent(<SelfEvents />);
  }, []);

  const [tabs, setTabs] = useState([
    {
      title: "Created by me",
      content: <SelfEvents />,
      active: true,
    },
    {
      title: "Participating",
      content: <ParticipatingEvents />,
      active: false,
    },
  ]);

  return (
    <View style={tw`bg-white`}>
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
      <View style={tw`flex flex-row justify-center items-center`}>
        <TabButtons
          currentTab={tabs[0]}
          tabs={tabs}
          setTabs={setTabs}
          setCurrentContent={setCurrentContent}
          border='border-r rounded-tr-lg'
        />
        <TabButtons
          currentTab={tabs[1]}
          tabs={tabs}
          setTabs={setTabs}
          setCurrentContent={setCurrentContent}
          border='border-l rounded-tl-lg '
        />
      </View>

      {currentContent}
    </View>
  );
}
