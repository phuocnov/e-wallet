import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import PromoScreen from './Promo';
import QRScanScreen from './QRScan';
import HistoryScreen from './History';
import ProfileScreen from './Profile';
const Tabs = createBottomTabNavigator();

export const RootTabNavigator = () => {
  return <Tabs.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Tabs.Screen component={HomeScreen} name="Home" />
    <Tabs.Screen component={PromoScreen} name="Promo" />
    <Tabs.Screen component={QRScanScreen} name="QRScan" />
    <Tabs.Screen component={HistoryScreen} name="History" />
    <Tabs.Screen component={ProfileScreen} name="Profile" />
  </Tabs.Navigator>;
};
