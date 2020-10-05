import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './';
import { Onboarding, SearchResults, ErrorScreen } from 'screens';
import {
  ONBOARDING,
  TAB_NAVIGATOR,
  SEARCH_RESULTS,
  ERROR_SCREEN,
} from 'constants/routeNames';

const Stack = createStackNavigator();

export const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ONBOARDING} component={Onboarding} />
      <Stack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
      <Stack.Screen name={SEARCH_RESULTS} component={SearchResults} />
      <Stack.Screen name={ERROR_SCREEN} component={ErrorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
