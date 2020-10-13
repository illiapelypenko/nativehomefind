import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Search, Favorites } from 'screens';
import SearchLoop from 'assets/icons/searchLoop.svg';
import StarBig from 'assets/icons/starBig.svg';
import { COLORS, ROUTES } from 'constants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
  },
  headerLeft: () => false,
};

const SearchStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen
      name={ROUTES.SEARCH}
      component={Search}
      options={{ title: 'Search' }}
    />
  </Stack.Navigator>
);

const FavoritesStack = () => ( // to file
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen
      name={ROUTES.FAVORITES}
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
      <Tab.Screen name={ROUTES.SEARCH} component={SearchStack} />
      <Tab.Screen name={ROUTES.FAVORITES} component={FavoritesStack} />
      // stack screen
    </Tab.Navigator>
  );
};
