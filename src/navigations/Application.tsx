import type { AuthStackParamList, RootStackParamList } from '@/navigations/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';
import { AuthPaths, Paths } from '@/navigations/paths';

import { Example, Startup } from '@/screens';
import { useAppDispatch, useAppSelector } from '@/reducers/hooks';
import { useEffect, useState } from 'react';
import { CheckAuth } from '@/reducers/authSlice';
import LoginScreen from '@/screens/Auth/Login';
import OnBoarding from '@/screens/OnBoarding';
import SignUpScreen from '@/screens/Auth/Signup';
import { RootTabNavigator } from '@/screens/Root';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthenticatedStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen component={LoginScreen} name={AuthPaths.Login} />
      <AuthStack.Screen component={SignUpScreen} name={AuthPaths.Signup} />
      <AuthStack.Screen component={OnBoarding} name={AuthPaths.Onboarding} />
    </AuthStack.Navigator>
  );
}

function ApplicationNavigator() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isLoading, user } = useAppSelector(state => state.AuthSlice);
  const [isOnBoarding, setIsOnBoarding] = useState(false);
  useEffect(() => {
    dispatch(CheckAuth);
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isOnBoarding ? <OnBoarding />
          : isAuthenticated ? <RootTabNavigator /> : <AuthenticatedStack />
        }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
