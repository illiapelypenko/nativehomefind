import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Search, Favorites } from 'screens';
import SearchLoop from 'assets/searchLoop.svg';
import Star from 'assets/star.svg';
import { COLORS, ROUTES } from 'constants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={SEARCH}
      component={Search}
      options={{ title: 'Search' }}
    />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={FAVORITES}
      component={Favorites}
      options={{ title: 'Favorites' }}
    />
  </Stack.Navigator>
);

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
        activeTintColor: COLORS.FLAMINGO,
        inactiveTintColor: COLORS.MISCHKA,
        showLabel: false,
      }}
    >
      <Tab.Screen name={ROUTES.SEARCH} component={Search} />
      <Tab.Screen name={ROUTES.FAVORITES} component={Favorites} />
    </Tab.Navigator>
  );
};
