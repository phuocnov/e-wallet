import { createStackNavigator } from "@react-navigation/stack";
import RequestTransactionScreen from "./Request";

const TransactionStackNavigator = createStackNavigator();

function TransactionRoot() {
  return (
    <TransactionStackNavigator.Navigator screenOptions={{
      headerShown: false
    }}>
      <TransactionStackNavigator.Screen component={RequestTransactionScreen} name={"RequestTransaction"} />
    </TransactionStackNavigator.Navigator >
  );
}

export default TransactionRoot;

