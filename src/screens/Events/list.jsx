import { useLayoutEffect } from "react";
import tw from "twrnc";
import { View, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelfEvents from "../../components/Events/MyEventsTab/selfEvents";
import ParticipatingEvents from "../../components/Events/MyEventsTab/participatingEvent";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import SharedEvents from "../../components/Events/SharedEventsTab/sharedEvents";

const Tab = createMaterialTopTabNavigator();

export default function EventsList({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.pop()}>
          <View style={tw`ml-5`}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </View>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <View style={tw`mr-8`}>
            <Feather name="menu" size={25} color="#013B4F" style={tw`mt-2`} />
          </View>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Tab.Navigator
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
    </Tab.Navigator>
  );
}
