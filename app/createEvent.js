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

import { globalStyles } from "../styles/globalStyles";
import ticket1 from "../assets/images/ticket-1.png";
import ticket2 from "../assets/images/ticket-2.png";
import ticket3 from "../assets/images/ticket-3.png";
import LeftHeader from "../components/Navigation/leftHeader";
import EventTicket from "../components/Ticket/eventTicket";
import { useNavigation, Stack } from "expo-router";

export default function NewEvent() {
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");
  const [description, setDescription] = useState("");
  const windowHeight = Dimensions.get("window").height;
  const [file, setFile] = useState(null);
  const [eventTickets, setEventTickets] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const tickets = [ticket1, ticket2, ticket3];
  const [titleDropdown, setTitleDropdown] = useState(false);
  const [infoDropdown, setInfoDropdown] = useState(true);
  const [addressDropdown, setAddressDropdown] = useState(false);
  const [dobDropdown, setDOBDropdown] = useState(false);
  const [slots, setSlots] = useState(0);
  const [priority, setPriority] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const containerStyle = tw`flex flex-row justify-between items-center p-1 pb-2 my-2 border-b border-[#E3E3E3] w-full px-8`;
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

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const hideDatePicker = () => {
    setShowPicker(false);
  };

  const addNewTicket = () => {
    if (name && description && price) {
      setError("");
      setEventTickets([
        ...eventTickets,
        {
          item: {
            name,
            price,
            description,
            slots,
            priority,
            _id: eventTickets.length,
          },
        },
      ]);
      setName("");
      setPrice(0);
      setSlots(0);
      setPriority("");
      setDescription("");
    } else {
      setError("Fill out the required information.");
    }
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

          <TouchableOpacity
            onPress={() => setTitleDropdown(!titleDropdown)}
            style={containerStyle}
          >
            <Text style={[tw`text-[#52829D]`, globalStyles.poppinsFont]}>
              Event Title
            </Text>
          </TouchableOpacity>

          <View
            style={tw`${
              titleDropdown ? "" : "hidden"
            } mb-4 justify-center  w-full px-14`}
          >
            <View style={tw`flex-row justify-between items-center`}>
              <Text
                style={[
                  tw`text-[12px] text-[#868686]`,
                  globalStyles.poppinsFont,
                ]}
              >
                Event Title
              </Text>
              <TextInput
                placeholder="title"
                style={[
                  tw`text-[12px] text-[#868686] w-32 rounded-lg bg-white p-1 px-3 border border-slate-200 m-1`,
                  globalStyles.poppinsFont,
                ]}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setAddressDropdown(!addressDropdown)}
            style={containerStyle}
          >
            <Text style={[tw`text-[#52829D]`, globalStyles.poppinsFont]}>
              Address
            </Text>
            <Entypo name="location-pin" size={24} color="#52829D" />
          </TouchableOpacity>

          <View
            style={tw`${
              addressDropdown ? "" : "hidden"
            } mb-4 justify-center  w-full px-14`}
          >
            <View style={tw`flex-row justify-between items-center`}>
              <Text
                style={[
                  tw`text-[12px] text-[#868686]`,
                  globalStyles.poppinsFont,
                ]}
              >
                Location
              </Text>
              <TextInput
                placeholder="address"
                style={[
                  tw`text-[12px] text-[#868686] w-32 rounded-lg bg-white p-1 px-3 border border-slate-200 m-1`,
                  globalStyles.poppinsFont,
                ]}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setDOBDropdown(!dobDropdown)}
            style={containerStyle}
          >
            <Text style={[tw`text-[#52829D]`, globalStyles.poppinsFont]}>
              Date & Time
            </Text>
            <MaterialCommunityIcons name="clock" size={20} color="#52829D" />
          </TouchableOpacity>

          <View
            style={tw`${
              dobDropdown ? "" : "hidden"
            } mb-4 justify-center  w-full px-14`}
          >
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity
                style={tw`w-24 h-8 rounded-lg bg-[#013B4F] p-2`}
                onPress={() => setShowPicker(true)}
              >
                <Text
                  style={[
                    tw`text-[12px] text-white `,
                    globalStyles.poppinsFont,
                  ]}
                >
                  Select date
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setInfoDropdown(!infoDropdown)}
            style={containerStyle}
          >
            <Text style={[tw`text-[#52829D]`, globalStyles.poppinsFont]}>
              Additional info
            </Text>

            <MaterialIcons
              name="playlist-add"
              size={24}
              color="#52829D"
              style={tw`mr-[-6px]`}
            />
          </TouchableOpacity>

          <View
            style={tw`${
              infoDropdown ? "" : "hidden"
            } mb-4 justify-center  w-full px-14`}
          >
            <View style={tw`flex-row justify-between items-center`}>
              <Text
                style={[
                  tw`text-[12px] text-[#868686]`,
                  globalStyles.poppinsFont,
                ]}
              >
                Slots
              </Text>
              <TextInput
                placeholder="No.of slots"
                keyboardType="numeric"
                style={[
                  tw`text-[12px] text-[#868686] w-32 rounded-lg bg-white p-1 px-4 border border-slate-200 m-1`,
                  globalStyles.poppinsFont,
                ]}
                value={slots}
                onChangeText={(number) => setSlots(number)}
              />
            </View>

            <View style={tw`flex-row justify-between items-center`}>
              <Text
                style={[
                  tw`text-[12px] text-[#868686]`,
                  globalStyles.poppinsFont,
                ]}
              >
                Priority
              </Text>
              <TextInput
                placeholder="Reg/VIP/VVIP"
                style={[
                  tw`text-[12px] text-[#868686] w-32 rounded-lg bg-white p-1 px-4 border border-slate-200 m-1`,
                  globalStyles.poppinsFont,
                ]}
                value={priority}
                onChangeText={(text) => setPriority(text)}
              />
            </View>
          </View>

          <View style={tw`w-full items-center bg-[#F4FAFA] px-8 mt-3 py-6`}>
            <View style={tw`flex-row justify-between w-full items-center`}>
              <View style={tw`flex-row items-center`}>
                <Text style={globalStyles.poppinsFont}>Paid </Text>
                <Switch
                  trackColor={{ false: "#D9D9D9", true: "#1180B9" }}
                  thumbColor={isEnabled ? "#FAFBFB" : "#f4f3f4"}
                  ios_backgroundColor="#D9D9D9"
                  style={{ transform: [{ scaleX: 1.0 }, { scaleY: 0.9 }] }}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>

              <Text style={[tw`text-[#797979]`, globalStyles.poppinsFont]}>
                Tickets
              </Text>
            </View>

            <View style={tw`flex-row justify-between w-full items-center`}>
              <TextInput
                style={tw`w-52 rounded-lg bg-white p-2 border border-slate-200 focus:border-teal-600 m-2`}
                placeholder="Event Title"
                value={name}
                onChangeText={(text) => setName(text)}
              />
              <TextInput
                style={tw`w-26 rounded-lg bg-white p-2 border border-slate-200 focus:border-teal-600 m-2`}
                placeholder="Price in $"
                keyboardType="numeric"
                value={price}
                onChangeText={(number) => setPrice(number)}
              />
            </View>
            <Text
              style={[tw`text-[#797979] text-center`, globalStyles.poppinsFont]}
            >
              Description
            </Text>
            <TextInput
              style={tw`w-80 bg-white h-20 border border-slate-200 rounded-lg px-3`}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
            <Text style={tw`text-[10px] text-red-600 mt-3`}>{error}</Text>
            <TouchableOpacity
              onPress={() => addNewTicket()}
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
            {eventTickets.map((ticket) => (
              <EventTicket
                item={ticket.item}
                tickets={tickets}
                marginRight="7"
                key={ticket.item.id}
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
            <TouchableOpacity
              style={tw`w-70 h-13 rounded-full justify-center self-center items-center bg-[#013B4F] mt-14`}
            >
              <Text style={tw`text-white font-bold`}>Create event</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
