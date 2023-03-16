import { useState, useLayoutEffect } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import { globalStyles } from "../../../globalStyles";
import profile from "../../../assets/images/profile.png";
import overlay from "../../../assets/images/rectangle-9.png";
import backgroundImage from "../../../assets/images/banner.png";
import ShareModal from "../../components/Modal/Sharemodal";
import LeftHeader from "../../components/Navigation/leftHeader";

export default function Event({ navigation }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const event = {
    name: "Event Name",
    location: "Savanorių pr. 16, LT-03116, Vilniaus m. sav.",
    time: "Sunday - 11h AM",
    info: "At nunc si ad aliquem bene nummatum em ue ideo honestus advenAt nunc",
  };
  const windowHeight = Dimensions.get("window").height;

  useLayoutEffect(() => {
    LeftHeader({ navigation });
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <View style={tw`mr-8`}>
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
          </View>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View>
      <Image
        source={backgroundImage}
        style={(globalStyles.bgImage, StyleSheet.absoluteFill)}
      />
      <Image source={overlay} style={StyleSheet.absoluteFill} />
      <ScrollView style={tw`h-[${windowHeight * 0.75}px] p-6`}>
        <View
          style={tw`flex flex-row w-full justify-between items-center mb-4 mt-16`}
        >
          <View style={tw`p-2`}>
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
                <Text style={tw`text-white font-bold ml-[-6px]`}>
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

        <View style={[tw`bg-white p-5 rounded-2xl w-76`, globalStyles.shadow]}>
          <View style={tw`flex flex-row justify-between items-center`}>
            <View>
              <Text style={tw`text-lg font-bold tracking-wide`}>
                {event.name}
              </Text>
              <Text style={tw`text-[#1180B9] font-bold`}>
                Address Information
              </Text>
            </View>
            <TouchableOpacity onPress={() => setOpen(!open)}>
              <Entypo name="forward" size={24} color="#1180B9" />
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-row mt-3 w-60 items-center`}>
            <MaterialIcons name="location-on" size={24} color="#1180B9" />
            <Text style={tw`text-[#1180B9] text-xs ml-1`}>
              {event.location}
            </Text>
          </View>
        </View>

        <View
          style={[tw`bg-white p-5 rounded-2xl mt-4 w-76`, globalStyles.shadow]}
        >
          <Text style={tw`text-[#1180B9] font-bold text-lg`}>Event's Time</Text>
          <View style={tw`flex flex-row mt-3 w-60 items-center`}>
            <Ionicons name="md-calendar" size={20} color="black" />
            <Text style={tw`ml-1 font-bold`}>{event.time}</Text>
          </View>
        </View>

        <View
          style={[
            tw`bg-white p-5 rounded-2xl mt-4 mb-20 w-76`,
            globalStyles.shadow,
          ]}
        >
          <Text style={tw`text-[#1180B9] font-bold text-lg`}>
            Additional Information
          </Text>
          <Text style={tw`ml-1 text-xs`}>{event.info}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={tw`w-76 justify-center items-center self-center p-3 bg-[#013B4F] rounded-full m-4`}
      >
        <Text style={tw`text-white font-bold text-lg`}>RSVP</Text>
      </TouchableOpacity>

      <ShareModal open={open} setOpen={setOpen} />
    </View>
  );
}
