
const base_url       = 'http://api.openweathermap.org/data/2.5/weather';
const api_key        = '&APPID=ef19f8b1495e36aacbff7791abd607fe';
const weather_search = '?q=';
const language       = '&lang=es';
const unit           = '&units=metric';

export const getWeather = q_city => `${base_url}${weather_search}${q_city}${api_key}${language}${unit}`;
export const getIcon = code_icon => `http://openweathermap.org/img/wn/${code_icon}@4x.png`;


