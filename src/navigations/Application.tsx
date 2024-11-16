import type { RootStackParamList } from '@/navigations/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';
import { Paths } from '@/navigations/paths';

import { Example } from '@/screens';
import { useAppDispatch, useAppSelector } from '@/reducers/hooks';
import { useEffect, useState } from 'react';
import { CheckAuth } from '@/reducers/authSlice';
import LoginScreen from '@/screens/Auth/Login';
import OnBoarding from '@/screens/OnBoarding';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();
  const dispatch = useAppDispatch();
  const { isAuthenticated, isLoading, user } = useAppSelector(state => state.AuthSlice);
  const [isOnBoarding, setIsOnBoarding] = useState(true);
  useEffect(() => {
    dispatch(CheckAuth);
  }, [dispatch]);

  const handleGotoLogin = () => {
    setIsOnBoarding(false);
  }


  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        {isOnBoarding ? <OnBoarding goToLogin={handleGotoLogin} /> :
          <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
              <Stack.Screen component={LoginScreen} name={Paths.Startup} />
            ) : (
              <Stack.Screen component={LoginScreen} name={Paths.Example} />
            )}
          </Stack.Navigator>
        }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
