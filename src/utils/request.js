import { API_KEY } from 'constants';

export async function http(url, urlParams = '') {
  const X_RAPID_HOST = 'realtor.p.rapidapi.com';
  const headers = {
    'x-rapidapi-host': X_RAPID_HOST,
    'x-rapidapi-key': API_KEY,
  };

  function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  try {
    const timeout = async (time = 60000) => {
      await wait(time);

      throw Error();
    };

    const query = () =>
      fetch(url + urlParams, {
        headers,
      });

    const response = await Promise.race([query(), timeout()]);

    if (!response.ok) {
      throw Error();
    }

    const data = await response.json();

    return data;
  } catch (e) {
    throw Error(
      'An error occurred while searching. Please check your network connection and try again.'
    );
  }
}
