import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchStack, FavoritesStack } from './StackScreens';
import SearchLoop from 'assets/icons/searchLoop.svg';
import StarBig from 'assets/icons/starBig.svg';
import { COLORS, ROUTES } from 'constants';

const Tab = createBottomTabNavigator();

const { Navigator, Screen } = Tab;

export const TabNavigator = () => {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) =>
          route.name === ROUTES.SEARCH ? (
            <SearchLoop color={color} />
          ) : (
            <StarBig color={color} />
          ),
      })}
      tabBarOptions={{
        activeTintColor: COLORS.FLAMINGO,
        inactiveTintColor: COLORS.MISCHKA,
        showLabel: false,
      }}
    >
      <Screen name={ROUTES.SEARCH} component={SearchStack} />
      <Screen name={ROUTES.FAVORITES} component={FavoritesStack} />
    </Navigator>
  );
};
