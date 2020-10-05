import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search, Favorites } from '../screens';
import SearchLoop from '../assets/searchLoop.svg';
import Star from '../assets/star.svg';
import colors from '../constants/colors';
import { SEARCH, FAVORITES } from '../constants/routeNames';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) =>
          route.name === SEARCH ? (
            <SearchLoop color={color} />
          ) : (
            <Star color={color} />
          ),
      })}
      tabBarOptions={{
        activeTintColor: colors.FLAMINGO,
        inactiveTintColor: colors.MISCHKA,
        showLabel: false,
      }}
    >
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
    </Tab.Navigator>
  );
};
