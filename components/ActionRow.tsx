import { Text, TouchableOpacity } from "react-native";
import React from "react";

// rn navigation
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// icons
import { Ionicons } from "@expo/vector-icons";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  title: string;
  screen: any;
  color: string;
  icon?: any;
  vertical?: boolean;
  requiresPro?: boolean;
};

const ActionRow = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableOpacity
      className={`flex-1 m-2 justify-center items-center 
      py-6 rounded-lg space-x-2 ${props.vertical ? "flex-col" : "flex-row"}`}
      style={{ backgroundColor: props.color }}
      onPress={() => navigation.navigate(props.screen)}
    >
      <Ionicons name={props.icon} size={30} color="white" />
      <Text className="text-white font-bold text-lg">{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
