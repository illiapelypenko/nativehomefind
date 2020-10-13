import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Window from 'assets/icons/window.svg';
import { TabNavigator } from './';
import {
  Onboarding,
  SearchResults,
  ErrorScreen,
  PropertyScreen,
} from 'screens';
import { CardStyleButton } from 'components';
import { COLORS, ROUTES } from 'constants';

const Stack = createStackNavigator();

const headerStyles = {
  headerStyle: {
    backgroundColor: COLORS.FLAMINGO,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 5,
  },
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
  },
  headerTintColor: COLORS.WHITE,
  headerBackTitle: ' ',
};

export const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen
        name={ROUTES.ONBOARDING}
        component={Onboarding}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name={ROUTES.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.SEARCH_RESULTS}
        component={SearchResults}
        options={{
          ...headerStyles,
          headerRight: () => <CardStyleButton />,
        }}
      />
      <Stack.Screen
        name={ROUTES.PROPERTY_SCREEN}
        component={PropertyScreen}
        options={{ ...headerStyles }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
