import AsyncStorage from '@react-native-community/async-storage';

export const loadState = async () => {
  try {
    const state = await AsyncStorage.getItem('state');
    if (state === null) {
      return undefined;
    }

    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};

export const saveState = async state => {
  try {
    await AsyncStorage.setItem('state', JSON.stringify(state));
  } catch {}
};

// setalrearyl
