import axios from 'axios';
import * as types from './action_types';

const API_KEY='84b5a49ad93ba8326121a04a18420eb7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: types.FETCH_WEATHER,
    payload: request
  };
}
