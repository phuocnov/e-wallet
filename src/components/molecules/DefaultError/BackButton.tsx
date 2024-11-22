/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";

export const BackButton = () => {
  const navigation = useNavigation();
  return <TouchableOpacity onPress={() => { navigation.goBack();}}>
    <View style={{
      width: 32,
      height: 32,
      backgroundColor: 'white',
      borderRadius: 16,
    }} />
  </TouchableOpacity>
};
