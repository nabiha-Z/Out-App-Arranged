import { useState, useRef } from "react";
import { Animated } from "react-native";
import { Dimensions, View, Text } from "react-native";
import tw from "twrnc";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../../components/TabNavigator/home";
import Profile from "../../components/TabNavigator/profile";
import Messages from "../../components/TabNavigator/messages";
import MyTickets from "../../components/TabNavigator/tickets";

export default function Dashobard() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const Tab = createBottomTabNavigator();
  function getWidth() {
    let width = Dimensions.get("window").width;
    width = width - 50;
    return width / 5;
  }
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          showLabel: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: "flex",
              backgroundColor: "white",
              position: "absolute",
              marginHorizontal: 10,
              backgroundColor: "white",
              marginTop: -10,
              bottom: 0,
              marginHorizontal: 0,
              height: 90,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOpacity: 0.06,
              shadowOffset: {
                width: 10,
                height: 10,
              },
              paddingHorizontal: 20,
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name={"Events"}
          component={Home}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  tw`flex items-center`,
                  {
                    position: "absolute",
                    top: 18,
                  },
                ]}
              >
                <Ionicons
                  name="md-calendar"
                  size={24}
                  color={focused ? "#013B4F" : "#ACBCBF"}
                />

                <Text
                  style={{
                    color: focused ? "#013B4F" : "#BCBCBF",
                    fontSize: 10,
                  }}
                >
                  My events
                </Text>
              </View>
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Messages"}
          component={Messages}
          options={{
            title: "Chats list",
            headerStyle: {
              height: 110,
            },
            headerTitleStyle: {
              color: "#707377",
              fontSize: 14,
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: 1,
              left: 130,
              top: 25,
            },

            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  tw`flex items-center`,
                  {
                    position: "absolute",
                    top: 20,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="message"
                  size={24}
                  color={focused ? "#013B4F" : "#BCBCBF"}
                />
                <Text
                  style={{
                    color: focused ? "#013B4F" : "#BCBCBF",
                    fontSize: 10,
                  }}
                >
                  Messages
                </Text>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Plus"}
          component={Home}
          options={() => ({
            title: "",
            headerStyle: {
              height: 0,
            },
            headerTitleStyle: {
              color: "black",
              textAlign: "center",
              left: 110,
              fontWeight: "bold",
              top: 20,
            },
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "white",
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: Platform.OS == "android" ? 90 : 30,
                  borderWidth: 7,
                  borderColor: "#f3f4f6",
                }}
              >
                <Entypo name="plus" size={32} color="#013B4F" />
              </View>
            ),
          })}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Ticket"}
          component={MyTickets}
          options={{
            title: "My Tickets",
            headerStyle: {
              height: 110,
            },
            headerTitleStyle: {
              color: "#707377",
              fontSize: 17,
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: 1,
              left: 122,
              top: 25,
            },
            headerLeft: null,
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  tw`flex items-center`,
                  {
                    position: "absolute",
                    top: 20,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="ticket-account"
                  size={26}
                  color={focused ? "#013B4F" : "#BCBCBF"}
                />
                <Text
                  style={{
                    color: focused ? "#013B4F" : "#BCBCBF",
                    fontSize: 10,
                  }}
                >
                  My tickets
                </Text>
              </View>
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Profile"}
          component={Profile}
          options={{
            title: "Profile",
            headerStyle: {
              height: 110,
            },
            headerTitleStyle: {
              color: "#707377",
              fontSize: 17,
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: 1,
              left: 140,
              top: 25,
            },
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  tw`flex items-center`,
                  {
                    position: "absolute",
                    top: 20,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="account-circle"
                  size={26}
                  color={focused ? "#013B4F" : "#BCBCBF"}
                />
                <Text
                  style={{
                    color: focused ? "#013B4F" : "#BCBCBF",
                    fontSize: 10,
                  }}
                >
                  Account
                </Text>
              </View>
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: "#013B4F",
          position: "absolute",
          bottom: 90,
          left: 33,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </>
  );
}
