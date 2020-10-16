import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './TabNavigator';
import {
  Onboarding,
  SearchResults,
  PropertyScreen,
  ErrorScreen,
} from 'screens';
import { SizeButton } from 'components';
import { COLORS, ROUTES } from 'constants';

const Stack = createStackNavigator();

const { Navigator, Screen } = Stack;

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
  headerTintColor: COLORS.WHITE,
  headerBackTitle: ' ',
};

export const RootNavigation = ({ alreadyLaunched }) => {
  const error = useSelector(state => state.error);
  const ref = useRef();

  useEffect(() => {
    if (error.message) {
      ref.current.navigate(ROUTES.ERROR_SCREEN);
    }
  }, [error.message]);

  useEffect(() => {
    if (alreadyLaunched) {
      ref.current.navigate(ROUTES.TAB_NAVIGATOR);
    }
  }, [alreadyLaunched]);

  return (
    <NavigationContainer ref={ref}>
      <Navigator>
        {alreadyLaunched || (
          <Screen
            name={ROUTES.ONBOARDING}
            component={Onboarding}
            options={{ headerShown: false }}
          />
        )}
        <Screen
          name={ROUTES.TAB_NAVIGATOR}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Screen
          name={ROUTES.SEARCH_RESULTS}
          component={SearchResults}
          options={{
            ...headerStyles,
            headerRight: () => (
              <View style={{ padding: 20 }}>
                <SizeButton />
              </View>
            ),
            headerTitleStyle: {
              flex: 1,
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 18,
              lineHeight: 21,
            },
            headerTitleAlign: 'left',
          }}
        />
        <Screen
          name={ROUTES.PROPERTY_SCREEN}
          component={PropertyScreen}
          options={{
            ...headerStyles,
            headerTitleStyle: {
              flex: 1,
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 19,
              lineHeight: 22,
            },
            headerTitleContainerStyle: {
              left: 0,
            },
          }}
        />
        <Screen
          name={ROUTES.ERROR_SCREEN}
          component={ErrorScreen}
          options={{
            ...headerStyles,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
              lineHeight: 24,
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
