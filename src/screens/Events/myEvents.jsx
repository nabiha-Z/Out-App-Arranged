import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

export default function MyEvents() {
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
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
}
