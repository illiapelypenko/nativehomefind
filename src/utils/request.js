export async function http(url, urlParams = '') {
  const API_KEY = '897733c2d3msh13b53444c4f53c4p152d7fjsn04123a994089';
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

      throw Error('Session timeout');
    };

    const query = () =>
      fetch(url + urlParams, {
        headers,
      });

    const response = await Promise.race([query(), timeout()]);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
    throw new Error(
      'An error occurred while searching. Please check your network connection and try again.'
    );
  }
}
