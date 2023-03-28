import { useState } from "react";
import tw from "twrnc";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import Buttons from "../ProfileButtons/buttons";
import { globalStyles } from "../../styles/globalStyles";
import ProfileImage from "../../assets/images/profile.png";
import BackgroundImage from "../../assets/images/profile-bg.png";

export default function Profile() {
  const router = useRouter();
  const [name, setName] = useState("James Miler");
  const [age, setAge] = useState(19);
  const [bio, seBio] = useState(
    "I’m an adventure enthusiast with more than a decade exploring the world and it is fun."
  );

  return (
    <>
      <ScrollView style={[tw`h-4 bg-white`]}>
        <View style={tw`flex justify-center items-center bg-white`}>
          <Image source={BackgroundImage} />
          <View style={tw`flex flex-col absolute justify-center items-center`}>
            <View style={tw`rounded-full border-4 border-white`}>
              <Image source={ProfileImage} style={tw`rounded-full border-2`} />
            </View>
            <View style={tw`mt-4`}>
              <Text
                style={[
                  tw`text-white text-center text-lg`,
                  globalStyles.poppinsFontBold,
                ]}
              >
                {name}
              </Text>
              <Text
                style={[
                  tw`text-gray-300 text-center text-sm`,
                  globalStyles.poppinsFont,
                ]}
              >
                Age: {age} Years
              </Text>
            </View>

            <View style={tw`mt-6 px-6 w-72 mb-1`}>
              <Text style={[tw`text-white text-xs`, globalStyles.poppinsFont]}>
                Bio
              </Text>
              <Text style={[tw`text-white text-xs`, globalStyles.poppinsFont]}>
                Bio:{bio}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={tw`flex w-13 h-13 bg-[#1180B9] rounded-full mt-[-45px] justify-center items-center`}
          >
            <MaterialIcons name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={tw`flex m-10 justify-center self-center`}>
          <Buttons title="Payment Information" icon="wallet" pageRedirect="" />
          <Buttons title="Setting" icon="settings-sharp" pageRedirect="" />

          <Buttons
            title="About"
            icon="information-circle-sharp"
            pageRedirect=""
          />

          <TouchableOpacity
            style={tw`flex flex-row border-b border-gray-200 pb-4 mb-2`}
          >
            <MaterialIcons name="feedback" size={16} color="#185C7E" />
            <View style={tw`w-40`}>
              <Text
                style={[
                  tw`text-xs mx-3 font-light text-[#185C7E]`,
                  globalStyles.poppinsFont,
                ]}
              >
                Feedback
              </Text>
            </View>
            <View style={tw`flex items-end w-32`}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={14}
                color="#848484"
                style={tw`mr-5`}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`flex-row h-40 pt-10`}
            onPress={() => router.push("/home")}
          >
            <MaterialIcons name="logout" size={18} color="#777777" />
            <Text
              style={[tw`text-sm ml-2 text-gray-500`, globalStyles.poppinsFont]}
            >
              logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
