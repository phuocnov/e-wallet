
import { LogOut } from "@/reducers/authSlice";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import { Button, Text, View } from "react-native";
import * as AuthSlice from "@/reducers/authSlice";
function ProfileScreen() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.AuthSlice.user);
  return (
    <View>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        color: 'black',
      }}>ProfileScreen</Text>

      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        color: 'black',
      }}>{JSON.stringify(user)}</Text>
      <Button title="Logout" onPress={() => dispatch(LogOut)} />
    </View>
  );
}

export default ProfileScreen;
