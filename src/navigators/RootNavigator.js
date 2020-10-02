import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './';
import { Onboarding, SearchResults, ErrorScreen } from '../screens';

const Stack = createStackNavigator();

export const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
      <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
