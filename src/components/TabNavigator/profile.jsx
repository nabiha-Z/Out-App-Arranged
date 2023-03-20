import { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import BackgroundImage from "../../../assets/images/profile-bg.png";
import ProfileImage from "../../../assets/images/profile.png";
import About from "../../../assets/images/Vector-3.png";
import Settings from "../../../assets/images/Vector-4.png";
import Feedback from "../../../assets/images/Vector-5.png";
import Buttons from "../ProfileButtons/buttons";
import { globalStyles } from "../../../globalStyles";

export default function Profile() {
  const navigation = useNavigation();
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
                  tw`text-gray-300 text-center text-sm font-light`,
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

          <TouchableOpacity>
            <MaterialIcons
              name="edit"
              size={24}
              color="white"
              style={[
                tw`p-3 rounded-full`,
                { backgroundColor: "#1180B9", marginTop: -45 },
              ]}
            />
          </TouchableOpacity>
        </View>

        <View style={tw`m-10`}>
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
            onPress={() => navigation.navigate("HomeScreen")}
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
