import { version as graphqlVersion } from 'graphql';

import { apiVersion } from '../api-version';
import { fetchWeatherOfCity } from '../tianqi-api';

export function versions() {
  return {
    api: apiVersion,
    graphql: graphqlVersion,
  };
}

export async function weatherOfCity(parent: any, args: { name: string }) {
  const raw = await fetchWeatherOfCity(args.name).then((res) => res.json());
  return {
    city: {
      id: raw.cityid,
      name: raw.city,
    },
    updateTime: raw.update_time,
    code: raw.wea_img,
    localized: raw.wea,
    tempOfDay: raw.tem_day,
    tempOfNight: raw.tem_night,
  };
}
