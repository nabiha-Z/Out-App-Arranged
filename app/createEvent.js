import { useState, useLayoutEffect } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { events } from "../dummyData/data";
import { globalStyles } from "../styles/globalStyles";
import ticket1 from "../assets/images/ticket-1.png";
import ticket2 from "../assets/images/ticket-2.png";
import ticket3 from "../assets/images/ticket-3.png";
import LeftHeader from "../components/Navigation/leftHeader";
import EventTicket from "../components/Ticket/eventTicket";
import { useNavigation, Stack } from "expo-router";

export default function NewEvent() {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get("window").height;
  const [file, setFile] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const tickets = [ticket1, ticket2, ticket3];
  const containerStyle = tw`flex flex-row justify-between items-center p-1 pb-2 my-2 border-b border-[#E3E3E3] w-66`;
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useLayoutEffect(() => {
    LeftHeader({ navigation });
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 5],
      quality: 0.5,
      allowedFileTypes: ["jpg", "png"],
    });

    const { assets } = result;
    if (!result.canceled) {
      let fileInfo = await FileSystem.getInfoAsync(assets[0].uri);
      let fileSize = fileInfo.size / 1024 / 1024;

      if (fileSize <= 5) {
        const { assets } = result;
        setFile(assets[0].uri);
      } else {
        alert(
          "Please select an image that is less than or equal to 5MB in size."
        );
      }
    } else {
      setFile(null);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <View style={tw`bg-white`}>
      <Stack.Screen
        options={{
          title: "Event Creation",
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
      <Text style={[tw` text-center text-xs mt-3`, globalStyles.poppinsFont]}>
        You can create your own event here
      </Text>

      <ScrollView style={[{ height: windowHeight * 0.9 }]}>
        <View style={tw`flex justify-center items-center mt-8 mb-10`}>
          <Text style={[tw``, globalStyles.poppinsFontBold]}>Upload files</Text>
          <View style={tw`flex flex-row m-1 items-center`}>
            <Text
              style={[tw`text-[#B1B1B1] text-xs`, globalStyles.poppinsFont]}
            >
              file format only
            </Text>
            <Text
              style={[
                tw`mx-1 text-[#1180B9] bg-[#D5EDFA] rounded p-[3px] text-[10px]`,
                globalStyles.poppinsFont,
              ]}
            >
              JPG
            </Text>
            <Text
              style={[
                tw`text-[#3FB544] bg-[#D3FFD5] rounded p-[3px] text-[10px]`,
                globalStyles.poppinsFont,
              ]}
            >
              PNG
            </Text>
          </View>

          <View
            style={tw`bg-[#F7FDFF] rounded-lg  border border-dashed border-[#1180B9] 
          w-60 justify-center items-center m-3 p-4 mb-9`}
          >
            <TouchableOpacity style={tw`m-2`} onPress={pickImage}>
              <MaterialIcons
                name="drive-file-move-outline"
                size={40}
                color="#1180B9"
              />
            </TouchableOpacity>
            {file && (
              <TouchableOpacity onPress={() => removeFile()}>
                <Text style={tw`text-center text-[10px] text-[#3FB544] mb-2`}>
                  1 file attached (Tap to remove)
                </Text>
              </TouchableOpacity>
            )}

            <Text style={[tw`text-[#707070] `, globalStyles.poppinsFont]}>
              Choose files here
            </Text>
            <Text
              style={[tw`text-[#B1B1B1] text-[10px]`, globalStyles.poppinsFont]}
            >
              Maximum file size 5MB
            </Text>
          </View>

          <View style={containerStyle}>
            <Text style={[tw`text-[#52829D]`, globalStyles.poppinsFont]}>
              Event Title
            </Text>
          </View>

          <View style={containerStyle}>
            <Text style={[tw`text-[#52829D]`, globalStyles.poppinsFont]}>
              Address
            </Text>
            <Entypo name="location-pin" size={24} color="#52829D" />
          </View>

          <View style={containerStyle}>
            <Text style={[tw`text-[#52829D]`, globalStyles.poppinsFont]}>
              Date & Time
            </Text>
            <MaterialCommunityIcons name="clock" size={20} color="#52829D" />
          </View>

          <View style={containerStyle}>
            <Text style={[tw`text-[#52829D]`, globalStyles.poppinsFont]}>
              Additional info
            </Text>
            <MaterialIcons
              name="playlist-add"
              size={24}
              color="#52829D"
              style={tw`mr-[-6px]`}
            />
          </View>

          <View style={tw`w-full items-center bg-[#F4FAFA] px-10 mt-3 py-6`}>
            <View style={tw`flex-row justify-between w-full items-center`}>
              <View style={tw`flex-row items-center`}>
                <Text style={globalStyles.poppinsFont}>Paid </Text>
                <Switch
                  trackColor={{ false: "#D9D9D9", true: "#1180B9" }}
                  thumbColor={isEnabled ? "#FAFBFB" : "#f4f3f4"}
                  ios_backgroundColor="#D9D9D9"
                  style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>

              <Text style={[tw`text-[#797979]`, globalStyles.poppinsFont]}>
                Tickets
              </Text>
            </View>
            <Text
              style={[tw`text-[#797979] text-center`, globalStyles.poppinsFont]}
            >
              Description
            </Text>
            <TextInput style={tw`w-70 bg-white h-20`} />
            <TouchableOpacity
              style={tw`w-30 h-10 rounded-full p-2 items-center bg-[#1180B9] m-3`}
            >
              <Text style={[tw`text-white`, globalStyles.poppinsFont]}>
                Add Ticket
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`py-10 flex justify-between items-center `}
          >
            {events.map((item) => (
              <EventTicket
                item={item}
                tickets={tickets}
                marginRight="7"
                key={item._id}
              />
            ))}
          </ScrollView>
          <View style={tw`bg-[#F4FAFA] p-10 w-full`}>
            <Text style={[tw`text-[#797979]`, globalStyles.poppinsFont]}>
              Ticket Name 1: 50
            </Text>
            <Text style={[tw`text-[#797979]`, globalStyles.poppinsFont]}>
              Ticket Name 2: 150
            </Text>
            <Text style={[tw`text-[#797979]`, globalStyles.poppinsFont]}>
              Ticket Name 3: 50
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
