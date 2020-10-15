import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider, useDispatch } from 'react-redux';
import { RootNavigation } from './src/navigators/';
import store from './src/store/store';
import { getItem } from 'utils/asyncStorage';
import { setCardSize, setFavorites } from 'store/actions';

const App = () => {
  const [alreadyLaunched, setAlreadyLaunched] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getPersistedData().then(
      RNBootSplash.hide.bind(undefined, { duration: 250 })
    );
  }, []);

  const getPersistedData = async () => {
    const alreadyLaunched = await getItem('alreadyLaunched');
    const size = await getItem('size');
    const favorites = await getItem('favorites');
    setAlreadyLaunched(!!alreadyLaunched);
    if (size) dispatch(setCardSize(size));
    if (favorites) dispatch(setFavorites(favorites));
  };

  return <RootNavigation alreadyLaunched={alreadyLaunched} />;
};

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppContainer;
