import { createStackNavigator } from "@react-navigation/stack";
import Home1 from "./Home";
import HomeScreen2 from "./Home2";

const HomeStackNavigator = createStackNavigator();

function HomeScreen() {
  return (
    <HomeStackNavigator.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStackNavigator.Screen component={Home1} name={"Home1"} />
      <HomeStackNavigator.Screen component={HomeScreen2} name={"Home2"} />
    </HomeStackNavigator.Navigator >
  );
}

export default HomeScreen;
