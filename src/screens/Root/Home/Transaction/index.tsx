import { createStackNavigator } from "@react-navigation/stack";
import RequestTransactionScreen from "./Request";
import ConfirmTransactionScreen from "./Confirmnation";
import OTPTransactionScreen from "./OTP";
import ResultTransactionScreen from "./Result";
import AddBankLinkScreen from "./AddBankLink";
import RequestBankLinkScreen from "./RequestBankLink";

const TransactionStackNavigator = createStackNavigator();

function TransactionRoot() {
  return (
    <TransactionStackNavigator.Navigator screenOptions={{
      headerShown: false
    }}>
      <TransactionStackNavigator.Screen component={RequestTransactionScreen} name={"RequestTransaction"} />
      <TransactionStackNavigator.Screen component={ConfirmTransactionScreen} name={"ConfirmTransaction"} />
      <TransactionStackNavigator.Screen component={OTPTransactionScreen} name={"OTPTransactionScreen"} />
      <TransactionStackNavigator.Screen component={ResultTransactionScreen} name={"ResultTransactionScreen"} />
      <TransactionStackNavigator.Screen component={AddBankLinkScreen} name={"AddBankLinkScreen"} />
      <TransactionStackNavigator.Screen component={RequestBankLinkScreen} name={"RequestBankLinkScreen"} />
    </TransactionStackNavigator.Navigator >
  );
}

export default TransactionRoot;

