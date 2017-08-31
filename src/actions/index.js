import axios from 'axios';

const API_KEY ='14b174df08d8020c0b03aeffc4b07f2e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // axios.get() makes a AJAX request
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
