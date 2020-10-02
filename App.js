import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { Onboarding, Root, SearchResults, ErrorScreen } from "./src/screens/";
import store from "./src/store/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Onboarding'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Root' component={Root} />
          <Stack.Screen name='Onboarding' component={Onboarding} />
          <Stack.Screen name='SearchResults' component={SearchResults} />
          <Stack.Screen name='ErrorScreen' component={ErrorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
