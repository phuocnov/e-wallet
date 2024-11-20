import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

function Home1() {

  const navigation = useNavigation();
  return (
    <View>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        color: 'black',
      }}>HistoryScreen</Text>

      <Button title="Next" onPress={() => navigation.navigate('Home2')}>
        Go to Details
      </Button>
    </View>
  );
}

export default Home1;
