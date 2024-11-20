import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home";
import PromoScreen from "./Promo";
import QRScanScreen from "./QRScan";
import HistoryScreen from "./History";
import ProfileScreen from "./Profile";
const Tabs = createBottomTabNavigator();

export const RootTabNavigator = () => {
  return <Tabs.Navigator screenOptions={{
    headerShown: false
  }}>
    <Tabs.Screen name="Home" component={HomeScreen} />
    <Tabs.Screen name="Promo" component={PromoScreen} />
    <Tabs.Screen name="QRScan" component={QRScanScreen} />
    <Tabs.Screen name="History" component={HistoryScreen} />
    <Tabs.Screen name="Profile" component={ProfileScreen} />
  </Tabs.Navigator>
}
