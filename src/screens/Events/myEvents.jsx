import tw from "twrnc";
import { useLayoutEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ParticipatingEvents from "../../components/Events/MyEventsTab/participatingEvent";
import SelfEvents from "../../components/Events/MyEventsTab/selfEvents";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

export default function MyEvents({ navigation }) {

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
        <TouchableOpacity onPress={() => setShowSetting(!showSetting)}>
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
          },
        }}
      >
        <Tab.Screen name="Created by me" component={SelfEvents} />
        <Tab.Screen name="Participating" component={ParticipatingEvents} />
      </Tab.Navigator>

  );
}
