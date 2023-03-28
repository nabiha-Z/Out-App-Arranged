import { useState, useLayoutEffect } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";
import ShareModal from "../components/Modal/Sharemodal";
import SettingsModal from "../components/Modal/Settings";
import profile from "../assets/images/profile.png";
import overlay from "../assets/images/rectangle-9.png";
import backgroundImage from "../assets/images/banner.png";
import LeftHeader from "../components/Navigation/leftHeader";
import EventTicket from "../components/Ticket/eventTicket";
import ticket1 from "../assets/images/ticket-1.png";
import ticket2 from "../assets/images/ticket-2.png";
import ticket3 from "../assets/images/ticket-3.png";
import cartIcon from "../assets/images/cart-icon.png";
import { events } from "../dummyData/data";
import { useNavigation, useRouter } from "expo-router";
import { Stack } from "expo-router";

export default function Event() {
  const navigation = useNavigation();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [user, setUser] = useState(true);
  const event = {
    name: "Event Name",
    location: "Savanorių pr. 16, LT-03116, Vilniaus m. sav.",
    time: "Sunday - 11h AM",
    info: "At nunc si ad aliquem bene nummatum em ue ideo honestus advenAt nunc",
  };
  const tickets = [ticket1, ticket2, ticket3];
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useLayoutEffect(() => {
    LeftHeader({ navigation });
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={tw`mr-4`}
          onPress={() => setShowSetting(!showSetting)}
        >
          {user ? (
            <>
              <View
                style={tw`flex self-end absolute z-10 bg-white w-[10px] h-[10px] items-center justify-center rounded-full`}
              >
                <View
                  style={tw`flex self-end absolute z-10 bg-red-500 w-2 h-2 rounded-full`}
                ></View>
              </View>
              <MaterialCommunityIcons name="cart" size={24} color="#B1B1B1" />
            </>
          ) : (
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="black"
            />
          )}
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={tw`flex`}>
      <Stack.Screen options={{ title: "" }} />
      <Image
        source={backgroundImage}
        style={tw`w-${windowWidth * 0.25} h-${windowHeight * 0.25} absolute`}
      />
      <Image
        source={overlay}
        style={tw`w-${windowWidth * 0.46} h-${windowHeight * 0.36} absolute`}
      />
      <ScrollView style={tw`h-[${windowHeight * 0.75}px] p-2`}>
        <View
          style={tw`flex flex-row w-full justify-between items-center
           px-${windowWidth * 0.03}  mb-6 mt-20`}
        >
          <View style={tw`py-2`}>
            {user && (
              <>
                <View
                  style={tw`h-16 w-16 rounded-full bg-[#036182] justify-center items-center`}
                >
                  <Image
                    source={profile}
                    style={tw`w-13 h-13 rounded-full border border-white`}
                  />
                </View>
                <Text style={tw`text-white font-bold ml-[-1px]`}>
                  James Miller
                </Text>
              </>
            )}
          </View>
          <View
            style={[
              tw`w-14 h-14 rounded-full items-center justify-center bg-white`,
              globalStyles.highlightedShadow,
            ]}
          >
            <MaterialCommunityIcons name="message" size={26} color="#1180B9" />
          </View>
        </View>

        <View
          style={tw`flex justify-center items-center pt-2 pb-10 mt-50 px-${
            windowWidth * 0.04
          }`}
        >
          <View
            style={[
              tw`bg-white p-5 rounded-2xl px-${windowWidth * 0.024}`,
              globalStyles.shadow,
            ]}
          >
            <View style={tw`flex flex-row justify-between items-center`}>
              <View>
                <Text
                  style={[
                    tw`text-lg tracking-wider font-bold`,
                    globalStyles.poppinsFont,
                  ]}
                >
                  {event.name}
                </Text>
                <Text
                  style={[
                    tw`text-[#1180B9] font-medium text-[14px]`,
                    globalStyles.poppinsFont,
                  ]}
                >
                  Address Information
                </Text>
              </View>
              <TouchableOpacity onPress={() => setOpen(!open)}>
                <Entypo name="forward" size={24} color="#1180B9" />
              </TouchableOpacity>
            </View>

            <View style={tw`flex flex-row mt-3 w-60 items-center`}>
              <MaterialIcons name="location-on" size={24} color="#1180B9" />
              <Text
                style={[
                  tw`text-[#1180B9] text-[10px] ml-1`,
                  globalStyles.poppinsFont,
                ]}
              >
                {event.location}
              </Text>
            </View>
          </View>

          <View
            style={[
              tw`bg-white p-5 rounded-2xl mt-4 px-${windowWidth * 0.024}`,
              globalStyles.shadow,
            ]}
          >
            <Text
              style={[tw`text-[#1180B9] text-[14px]`, globalStyles.poppinsFont]}
            >
              Event's Time
            </Text>
            <View style={tw`flex flex-row mt-3 w-60 items-center`}>
              <Ionicons name="md-calendar" size={20} color="black" />
              <Text style={[tw`ml-1 text-xs`, globalStyles.poppinsFont]}>
                {event.time}
              </Text>
            </View>
          </View>

          <View
            style={[
              tw` bg-white p-5 rounded-2xl mt-4 mx-4 px-${windowWidth * 0.015}`,
              globalStyles.shadow,
            ]}
          >
            <Text style={[tw`text-[#1180B9]`, globalStyles.poppinsFont]}>
              Additional Information
            </Text>
            <Text style={[tw`ml-1 text-xs w-68`, globalStyles.poppinsFont]}>
              {event.info}
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`py-15 pt-5 flex justify-between items-center `}
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
      </ScrollView>
      <TouchableOpacity
        style={tw`w-18 h-18 justify-center items-center self-center p-3 bg-[#1180B9] rounded-full m-4 mt-6`}
        onPress={() => router.push("/cart")}
      >
        <Image source={cartIcon} />
      </TouchableOpacity>

      <ShareModal open={open} setOpen={setOpen} />
      <SettingsModal open={showSetting} setOpen={setShowSetting} />
    </View>
  );
}
