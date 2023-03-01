// rn navigation
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Demo"
>;

function useMyNavigation(props: Props) {
  const navigation = useNavigation<NavigationProp>();
  return navigation;
}

export default useMyNavigation;
