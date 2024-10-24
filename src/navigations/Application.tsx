import type { RootStackParamList } from '@/navigations/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';
import { Paths } from '@/navigations/paths';

import { Example } from '@/screens';
import { useAppDispatch, useAppSelector } from '@/reducers/hooks';
import { useEffect } from 'react';
import { CheckAuth } from '@/reducers/authSlice';
import LoginScreen from '@/screens/Auth/Login';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();
  const dispatch = useAppDispatch();
  const { isAuthenticated, isLoading, user } = useAppSelector(state => state.AuthSlice);

  useEffect(() => {
    dispatch(CheckAuth);
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <Stack.Screen component={LoginScreen} name={Paths.Startup} />
          ) : (
            <Stack.Screen component={LoginScreen} name={Paths.Example} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
