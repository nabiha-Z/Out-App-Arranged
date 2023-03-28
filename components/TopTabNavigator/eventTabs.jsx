import tw from "twrnc";
import { TouchableOpacity, Text } from "react-native";

import { changeActive } from "../../helpers/eventTabs";
import { globalStyles } from "../../styles/globalStyles";

export default function TabButtons({
  currentTab,
  tabs,
  setTabs,
  setCurrentContent,
  border,
}) {
  return (
    <TouchableOpacity
      key={currentTab.title}
      style={tw`p-4 w-50 items-center justify-center bg-white border-[#C9C9C9] ${
        currentTab.active ? `border-t ${border} rounded-tr-xl` : "border-b"
      } `}
      onPress={() =>
        changeActive({
          currentTab,
          tabs,
          setTabs,
          setCurrentContent,
        })
      }
    >
      <Text style={[tw`text-center text-[#5B5B5B]`, globalStyles.poppinsFont]}>
        {currentTab.title}
      </Text>
    </TouchableOpacity>
  );
}
