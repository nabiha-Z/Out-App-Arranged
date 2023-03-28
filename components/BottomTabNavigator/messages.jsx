import { View, ScrollView } from "react-native";
import tw from "twrnc";
import { messages } from "../../dummyData/data";
import SearchHeader from "../Header/searchHeader";
import ChatList from "../Chats/chatList";

export default function Messages() {
  return (
    <>
      <ScrollView style={[tw`h-4 bg-white`]}>
        <SearchHeader paddingTop={8} />
        <View style={tw`mx-4`}>
          {messages.map((item) => (
            <ChatList
              key={item._id}
              image={item.image}
              username={item.name}
              last_message={item.last_message}
              time={item.time}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
