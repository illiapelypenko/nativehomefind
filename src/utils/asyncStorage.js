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

export const setItem = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(value));
  } catch {}
};

export const getItem = async value => {
  try {
    const data = await AsyncStorage.getItem(value);
    if (data === null) {
      return undefined;
    }

    return JSON.parse(data);
  } catch (err) {
    return undefined;
  }
};
