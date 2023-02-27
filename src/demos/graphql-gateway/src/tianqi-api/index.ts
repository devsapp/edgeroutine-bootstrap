import { isCacheSupported } from '../util';

export async function fetchWeatherOfCity(city: string) {
  const url = new URL('http://www.tianqiapi.com/free/day');
  url.searchParams.set('appid', '23035354');
  url.searchParams.set('appsecret', '8YvlPNrz');
  url.searchParams.set('city', city);

  const urlString = url.toString();

  if (isCacheSupported()) {
    const cachedResponse = await cache.get(urlString);
    if (cachedResponse) {
      return cachedResponse;
    }
  }

  const response = await fetch(urlString);
  if (isCacheSupported()) {
    cache.put(urlString, response);
  }
  return response;
}
