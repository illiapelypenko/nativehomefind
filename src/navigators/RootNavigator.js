import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './';
import { Onboarding, SearchResults, ErrorScreen } from 'screens';
import { ROUTES } from 'constants';

const Stack = createStackNavigator();

export const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={ROUTES.TAB_NAVIGATOR} component={TabNavigator} />
      <Stack.Screen name={ROUTES.SEARCH_RESULTS} component={SearchResults} />
      <Stack.Screen name={ROUTES.ERROR_SCREEN} component={ErrorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
