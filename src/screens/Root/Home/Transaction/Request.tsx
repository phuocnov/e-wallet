import { BackButton } from "@/components/molecules/DefaultError/BackButton";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";


function RequestTransactionScreen() {
  const navigation = useNavigation();
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#8C98AA',
      alignItems: 'center',
    }}>
      <View>
        <BackButton />
      </View>
    </View>
  );
}

export default RequestTransactionScreen;
