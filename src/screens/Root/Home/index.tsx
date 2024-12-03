import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import TransactionRoot from "./Transaction";

const HomeStackNavigator = createStackNavigator();

function HomeScreen() {
  return (
    <HomeStackNavigator.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStackNavigator.Screen component={Home} name={"HomePage"} />
      <HomeStackNavigator.Screen component={TransactionRoot} name={"TransactionRoot"} />
    </HomeStackNavigator.Navigator >
  );
}

export default HomeScreen;
