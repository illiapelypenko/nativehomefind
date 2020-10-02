import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search, Favorites } from '../screens';
import SearchLoop from '../assets/searchLoop.svg';
import Star from '../assets/star.svg';
import colors from '../constats/colors';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) =>
          route.name === 'Search' ? (
            <SearchLoop fill={color} />
          ) : (
            <Star fill={color} />
          ),
      })}
      tabBarOptions={{
        activeTintColor: colors.FLAMINGO,
        inactiveTintColor: '#A6AAB4',
        showLabel: false,
      }}
    >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};
