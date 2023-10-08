import { getWeatherBGFromString } from '../utils/setBG.js';

export async function getWeatherData(
  query,
  API_KEY
) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric&lang=pt`
  );

  const res = await data?.text();

  console.log(res)

  //getWeatherBGFromString(JSON.parse(res)?.weather[0].main);

  return JSON.parse(res);
}
