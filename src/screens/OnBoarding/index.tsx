import Button from "@/components/atoms/Button";
import { SafeScreen } from "@/components/templates";
import { Text, View } from "react-native";
import { ScreenTransition } from "react-native-reanimated";

export default function OnBoarding(props: { goToLogin: () => void }) {
  return (<SafeScreen style={{
    display: 'flex',
    alignItems: 'center'
  }}>
    <View style={{
      display: 'flex',
      marginTop: 120,
      marginBottom: 240
    }}>
      <Text style={{
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 20,
        color: '#5F94E4'
      }}>E-Wallet</Text>
      <Text style={{
        fontSize: 18,
        marginBottom: 8,
        marginLeft: '50%',
      }}>Open your way!</Text>
    </View>
    <Button
      title="Get started!"
      ButtonStyles={{ width: '80%' }}
      onPress={() => { props.goToLogin() }}
    />
  </SafeScreen>);
}
