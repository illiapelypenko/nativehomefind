import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { RootNavigation } from './src/navigators/';
import ErrorBoundary from './src/ErrorBoundary';
import store from './src/store/store';

const App = () => {
  //setsState alreadySignIn
  useEffect(() => {
    setTimeout(() => RNBootSplash.hide({ duration: 250 }), 1000);
    //async storage get item alreadySignIn
  }, []);

  // if (!alreadySignIn) return <Error/>

  return (
    <Provider store={store}>
      {/* <ErrorBoundary> */}
      {/* <RootNavigation initialName={screen / onboarding} /> */}
      <RootNavigation />
      {/* </ErrorBoundary> */}
    </Provider>
  );
};

export default App;
