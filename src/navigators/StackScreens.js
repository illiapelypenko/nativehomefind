import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Search, Favorites } from 'screens';
import { COLORS, ROUTES } from 'constants';

const Stack = createStackNavigator();

const { Navigator, Screen } = Stack;

import { SizeButton } from 'components';

const screenOptions = {
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
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  headerTintColor: COLORS.WHITE,
};

export const SearchStack = () => (
  <Navigator screenOptions={screenOptions}>
    <Screen
      name={ROUTES.SEARCH}
      component={Search}
      options={{ title: 'Search', headerLeft: () => false }}
    />
  </Navigator>
);

export const FavoritesStack = () => (
  <Navigator screenOptions={screenOptions}>
    <Screen
      name={ROUTES.FAVORITES}
      component={Favorites}
      options={{
        title: 'Favorites',
        headerLeft: () => <View style={{ width: 60 }}></View>,
        headerRight: () => (
          <View style={{ padding: 20 }}>
            <SizeButton />
          </View>
        ),
      }}
    />
  </Navigator>
);
