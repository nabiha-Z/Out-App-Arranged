import tw from "twrnc";
import { useLayoutEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import LeftHeader from "../../components/Navigation/leftHeader";
import ticket1 from "../../../assets/images/ticket-1.png";
import ticket2 from "../../../assets/images/ticket-2.png";
import ticket3 from "../../../assets/images/ticket-3.png";
import CartItems from "../../components/Ticket/ticket";
import { events } from "../../dummyData/data";

export default function Cart({ navigation }) {
  const windowHeight = Dimensions.get("window").height;
  const tickets = [ticket1, ticket2, ticket3];

  useLayoutEffect(() => {
    LeftHeader({ navigation });
  }, []);

  return (
    <ScrollView style={[tw`bg-white`, { height: windowHeight * 0.9 }]}>
      <View style={tw`p-3`}>
        {events.map((item) => (
          <CartItems tickets={tickets} item={item} key={item._id} />
        ))}
      </View>

      <View style={tw`m-7`}>
        <Text style={tw`font-light`}>Subtotal: $90.25</Text>
        <Text style={tw`font-light`}>Tax: $20.57</Text>
        <Text style={tw`text-lg font-bold text-[#628693] mt-1`}>
          Total: $120
        </Text>
      </View>

      <TouchableOpacity
        style={tw`w-70 h-12 rounded-full justify-center self-center items-center bg-[#117DB4] mb-14`}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Text style={tw`text-white font-bold`}>Proceed with payemnt</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
