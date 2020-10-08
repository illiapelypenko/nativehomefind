import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { RootNavigation } from './src/navigators/';
import store from './src/store/store';

const App = () => {
  useEffect(() => {
    setTimeout(() => RNBootSplash.hide({ duration: 250 }), 1000);
  }, []);

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
