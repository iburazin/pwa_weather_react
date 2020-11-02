import axios from "axios";

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = "c9e293995e61f4337cf9f5158c3280e9";

export const fetchWeather = async query => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY
    }
  });

  return data;
};
