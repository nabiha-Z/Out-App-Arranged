import tw from "twrnc";
import { useLayoutEffect } from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { useNavigation, useRouter, Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

import ellipse1 from "../assets/images/ellipse-3.png";
import LeftHeader from "../components/Navigation/leftHeader";
import PaymentProgressBar from "../components/ProgressBar/paymentProgressBar";
import { globalStyles } from "../styles/globalStyles";

export default function Checkout() {
  const navigation = useNavigation();
  const router = useRouter();
  useLayoutEffect(() => {
    LeftHeader({ navigation });
  }, []);

  return (
    <ScrollView style={tw`bg-[#F8FAFB] p-5`}>
      <Stack.Screen
        options={{
          title: "Checkout",
          headerStyle: {
            backgroundColor: "white",
            height: 130,
          },
          headerTitleStyle: globalStyles.screenHeaderStyles,
        }}
      />

      <Text style={tw`font-bold`}>Payment Pogress</Text>
      <PaymentProgressBar />

      <View
        style={tw`m-4 mt-10 p-3 h-70 rounded-3xl justify-center items-center bg-white`}
      >
        <Text style={tw`text-center m-3 mt-0 text-[15px] font-semibold`}>
          Your Payment is Successfully Completed!
        </Text>
        <View style={tw`items-center justify-center`}>
          <Image source={ellipse1} />
          <View
            style={tw`bg-[#F9F9F9] w-30 h-30 rounded-full absolute justify-center items-center`}
          >
            <AntDesign name="check" size={70} color="#117DB4" />
            {/* <Image source={checkMark} /> */}
          </View>
        </View>
      </View>

      <View style={tw`m-7`}>
        <Text style={tw`font-light`}>Subtotal: $90.25</Text>
        <Text style={tw`font-light`}>Tax: $20.57</Text>
        <Text style={tw`text-lg font-bold text-[#628693] mt-1`}>
          Total: $120
        </Text>
      </View>

      <TouchableOpacity
        style={tw`w-70 h-12 rounded-full justify-center self-center items-center bg-[#117DB4]`}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={tw`text-white font-bold`}>Return Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
