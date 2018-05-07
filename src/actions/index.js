import axios from 'axios'

const API_KEY = '4ad044eab04d23154e3fa874df93ead0'
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city, country) {
  const url = `${ROOT_URL}&q=${city},${country}`
  const request = axios.get(url) // returns Promise

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
